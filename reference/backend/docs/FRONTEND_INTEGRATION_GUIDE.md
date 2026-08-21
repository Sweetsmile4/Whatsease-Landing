# Frontend Integration Guide - Flow Submissions

## 🎯 TypeScript Types

```typescript
// types/flow-submissions.ts

export interface FlowSubmission {
  id: string;
  platform_account_id: string;
  user_id: string;
  sender_phone: string;
  sender_name?: string;
  wa_id: string;

  // Flow details
  flow_token: string;
  flow_name?: string;
  flow_version?: string;

  // Message context
  message_id: string;
  conversation_id?: string;

  // Dynamic form data - can be any structure
  form_data: Record<string, any>;
  raw_nfm_data: Record<string, any>;

  // Workflow tracking
  workflow_executed: boolean;
  workflow_id?: string;
  next_node_id?: string;
  workflow_status?: "pending" | "processing" | "completed" | "failed";
  workflow_error?: string;

  // Timestamps
  submission_timestamp: string; // ISO datetime
  processed_at?: string;
  created_at: string;
  updated_at: string;

  // Categorization
  tags: string[];
  metadata: Record<string, any>;
}

export interface SubmissionFilters {
  platform_account_id?: string;
  sender_phone?: string;
  flow_token?: string;
  workflow_status?: string;
  tags?: string[];
  start_date?: string;
  end_date?: string;
  skip?: number;
  limit?: number;
}

export interface SubmissionAnalytics {
  total_submissions: number;
  by_flow_token: {
    [token: string]: {
      total: number;
      workflows_executed: number;
      statuses: {
        [status: string]: number;
      };
    };
  };
  query_period: {
    start_date?: string;
    end_date?: string;
  };
}
```

## 📡 API Service

```typescript
// services/flowSubmissionsApi.ts

import axios from "axios";
import type {
  FlowSubmission,
  SubmissionFilters,
  SubmissionAnalytics,
} from "@/types/flow-submissions";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const flowSubmissionsApi = {
  /**
   * Get submissions with filters
   */
  async getSubmissions(filters: SubmissionFilters): Promise<FlowSubmission[]> {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.append(key, String(value));
        }
      }
    });

    const response = await axios.get(`${API_BASE}/flow-submissions?${params}`);
    return response.data;
  },

  /**
   * Get submissions for a specific conversation (for inbox)
   */
  async getConversationSubmissions(
    phoneNumber: string,
    platformAccountId: string,
    limit: number = 20
  ): Promise<FlowSubmission[]> {
    const response = await axios.get(
      `${API_BASE}/flow-submissions/conversation/${phoneNumber}`,
      { params: { platform_account_id: platformAccountId, limit } }
    );
    return response.data;
  },

  /**
   * Get single submission by ID
   */
  async getSubmission(id: string): Promise<FlowSubmission> {
    const response = await axios.get(`${API_BASE}/flow-submissions/${id}`);
    return response.data;
  },

  /**
   * Update submission
   */
  async updateSubmission(
    id: string,
    updates: Partial<
      Pick<FlowSubmission, "workflow_status" | "tags" | "metadata">
    >
  ): Promise<void> {
    await axios.patch(`${API_BASE}/flow-submissions/${id}`, updates);
  },

  /**
   * Get analytics summary (for dashboard)
   */
  async getAnalytics(
    platformAccountId?: string,
    flowToken?: string,
    days: number = 30
  ): Promise<SubmissionAnalytics> {
    const params = new URLSearchParams({ days: String(days) });
    if (platformAccountId)
      params.append("platform_account_id", platformAccountId);
    if (flowToken) params.append("flow_token", flowToken);

    const response = await axios.get(
      `${API_BASE}/flow-submissions/analytics/summary?${params}`
    );
    return response.data;
  },

  /**
   * Retry failed workflow
   */
  async retryWorkflow(id: string): Promise<void> {
    await axios.post(`${API_BASE}/flow-submissions/${id}/retry-workflow`);
  },

  /**
   * Export to CSV
   */
  async exportCSV(
    filters: Omit<SubmissionFilters, "skip" | "limit">
  ): Promise<Blob> {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) params.append(key, String(value));
    });

    const response = await axios.get(
      `${API_BASE}/flow-submissions/export/csv?${params}`,
      { responseType: "blob" }
    );
    return response.data;
  },
};
```

## 🎨 React Components

### 1. Form Submission Card (for Inbox)

```tsx
// components/inbox/FormSubmissionCard.tsx

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import type { FlowSubmission } from "@/types/flow-submissions";

interface FormSubmissionCardProps {
  submission: FlowSubmission;
  onViewDetails?: () => void;
}

export const FormSubmissionCard: React.FC<FormSubmissionCardProps> = ({
  submission,
  onViewDetails,
}) => {
  const formatFieldName = (key: string): string => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatFieldValue = (value: any): string => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card
      className="mb-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onViewDetails}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              📋 {submission.flow_name || "Form Submission"}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {formatDistanceToNow(new Date(submission.submission_timestamp), {
                addSuffix: true,
              })}
            </p>
          </div>
          {submission.workflow_executed && (
            <Badge className={getStatusColor(submission.workflow_status)}>
              {submission.workflow_status || "pending"}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2">
          {Object.entries(submission.form_data)
            .slice(0, 4)
            .map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="font-medium text-gray-700">
                  {formatFieldName(key)}:
                </span>
                <span className="ml-2 text-gray-600">
                  {formatFieldValue(value)}
                </span>
              </div>
            ))}

          {Object.keys(submission.form_data).length > 4 && (
            <p className="text-xs text-gray-500 italic">
              +{Object.keys(submission.form_data).length - 4} more fields
            </p>
          )}
        </div>

        {submission.workflow_executed && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center text-xs text-gray-600">
              <span
                className={`mr-2 ${
                  submission.workflow_status === "completed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submission.workflow_status === "completed" ? "✓" : "✗"}
              </span>
              Workflow {submission.workflow_status === "completed" ? "executed successfully" : "failed"}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
```

### 2. Submission Detail Modal

```tsx
// components/inbox/SubmissionDetailModal.tsx

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { FlowSubmission } from "@/types/flow-submissions";

interface SubmissionDetailModalProps {
  submission: FlowSubmission | null;
  isOpen: boolean;
  onClose: () => void;
  onRetry?: () => void;
}

export const SubmissionDetailModal: React.FC<SubmissionDetailModalProps> = ({
  submission,
  isOpen,
  onClose,
  onRetry,
}) => {
  if (!submission) return null;

  const formatFieldName = (key: string): string => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatFieldValue = (value: any): string => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{submission.flow_name || "Form Submission"}</DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">{submission.flow_token}</Badge>
            <Badge
              className={
                submission.workflow_status === "completed"
                  ? "bg-green-100 text-green-800"
                  : submission.workflow_status === "failed"
                  ? "bg-red-100 text-red-800"
                  : "bg-gray-100 text-gray-800"
              }
            >
              {submission.workflow_status || "pending"}
            </Badge>
          </div>
        </DialogHeader>

        <Tabs defaultValue="form-data" className="mt-4">
          <TabsList>
            <TabsTrigger value="form-data">Form Data</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="raw">Raw Data</TabsTrigger>
          </TabsList>

          <TabsContent value="form-data" className="space-y-3 mt-4">
            {Object.entries(submission.form_data).map(([key, value]) => (
              <div key={key} className="border-b pb-3">
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {formatFieldName(key)}
                </div>
                <div className="text-sm text-gray-900">
                  {formatFieldValue(value)}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="workflow" className="space-y-3 mt-4">
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Status:
                </span>
                <span className="ml-2 text-sm text-gray-900">
                  {submission.workflow_status || "Not executed"}
                </span>
              </div>

              {submission.workflow_id && (
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Workflow ID:
                  </span>
                  <span className="ml-2 text-sm text-gray-900">
                    {submission.workflow_id}
                  </span>
                </div>
              )}

              {submission.workflow_error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <span className="text-sm font-medium text-red-700">
                    Error:
                  </span>
                  <p className="text-sm text-red-900 mt-1">
                    {submission.workflow_error}
                  </p>
                  {onRetry && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-2"
                      onClick={onRetry}
                    >
                      Retry Workflow
                    </Button>
                  )}
                </div>
              )}

              {submission.processed_at && (
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Processed:
                  </span>
                  <span className="ml-2 text-sm text-gray-900">
                    {new Date(submission.processed_at).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="raw" className="mt-4">
            <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
              {JSON.stringify(submission, null, 2)}
            </pre>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
```

### 3. Dashboard Analytics Widget

```tsx
// components/dashboard/SubmissionsAnalyticsWidget.tsx

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { flowSubmissionsApi } from "@/services/flowSubmissionsApi";
import type { SubmissionAnalytics } from "@/types/flow-submissions";

export const SubmissionsAnalyticsWidget: React.FC = () => {
  const [analytics, setAnalytics] = useState<SubmissionAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await flowSubmissionsApi.getAnalytics(
        undefined,
        undefined,
        30
      );
      setAnalytics(data);
    } catch (error) {
      console.error("Failed to load analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent>Loading...</CardContent>
      </Card>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardContent>No data available</CardContent>
      </Card>
    );
  }

  // Transform data for chart
  const chartData = Object.entries(analytics.by_flow_token).map(
    ([token, data]) => ({
      name: token.replace(/_/g, " "),
      submissions: data.total,
      automated: data.workflows_executed,
    })
  );

  const successRate =
    analytics.total_submissions > 0
      ? Math.round(
          (Object.values(analytics.by_flow_token).reduce(
            (sum, data) => sum + data.workflows_executed,
            0
          ) /
            analytics.total_submissions) *
            100
        )
      : 0;

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">
              {analytics.total_submissions}
            </p>
            <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Automation Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{successRate}%</p>
            <p className="text-xs text-gray-500 mt-1">Workflows executed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Form Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">
              {Object.keys(analytics.by_flow_token).length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Active forms</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Submissions by Form Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="submissions"
                fill="#04b851"
                name="Total Submissions"
              />
              <Bar dataKey="automated" fill="#13D960" name="Automated" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
```

### 4. Inbox Integration Hook

```tsx
// hooks/useConversationSubmissions.ts

import { useState, useEffect } from "react";
import { flowSubmissionsApi } from "@/services/flowSubmissionsApi";
import type { FlowSubmission } from "@/types/flow-submissions";

export const useConversationSubmissions = (
  phoneNumber: string | null,
  platformAccountId: string | null
) => {
  const [submissions, setSubmissions] = useState<FlowSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!phoneNumber || !platformAccountId) {
      setSubmissions([]);
      return;
    }

    loadSubmissions();
  }, [phoneNumber, platformAccountId]);

  const loadSubmissions = async () => {
    if (!phoneNumber || !platformAccountId) return;

    setLoading(true);
    setError(null);

    try {
      const data = await flowSubmissionsApi.getConversationSubmissions(
        phoneNumber,
        platformAccountId
      );
      setSubmissions(data);
    } catch (err) {
      setError("Failed to load form submissions");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { submissions, loading, error, refresh: loadSubmissions };
};
```

### 5. Using in Inbox

```tsx
// components/inbox/ConversationView.tsx

import React, { useState } from "react";
import { useConversationSubmissions } from "@/hooks/useConversationSubmissions";
import { FormSubmissionCard } from "./FormSubmissionCard";
import { SubmissionDetailModal } from "./SubmissionDetailModal";
import type { FlowSubmission } from "@/types/flow-submissions";

interface ConversationViewProps {
  phoneNumber: string;
  platformAccountId: string;
}

export const ConversationView: React.FC<ConversationViewProps> = ({
  phoneNumber,
  platformAccountId,
}) => {
  const { submissions, loading } = useConversationSubmissions(
    phoneNumber,
    platformAccountId
  );

  const [selectedSubmission, setSelectedSubmission] =
    useState<FlowSubmission | null>(null);

  return (
    <div className="space-y-4">
      {/* Regular messages */}
      <div className="space-y-2">{/* Your existing message components */}</div>

      {/* Form submissions */}
      {submissions.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Form Submissions
          </h3>
          {submissions.map((submission) => (
            <FormSubmissionCard
              key={submission.id}
              submission={submission}
              onViewDetails={() => setSelectedSubmission(submission)}
            />
          ))}
        </div>
      )}

      {/* Detail modal */}
      <SubmissionDetailModal
        submission={selectedSubmission}
        isOpen={!!selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
      />
    </div>
  );
};
```

## 📦 Installation

```bash
# Install required packages
npm install axios date-fns recharts

# Or with yarn
yarn add axios date-fns recharts
```

## 🎯 Quick Start

1. Copy TypeScript types to your project
2. Add API service file
3. Implement components in your inbox
4. Add analytics widget to dashboard
5. Test with real submissions

## 🔗 API Endpoints Reference

| Endpoint                                 | Method | Purpose           |
| ---------------------------------------- | ------ | ----------------- |
| `/flow-submissions`                      | GET    | List with filters |
| `/flow-submissions/conversation/{phone}` | GET    | Inbox submissions |
| `/flow-submissions/{id}`                 | GET    | Single submission |
| `/flow-submissions/{id}`                 | PATCH  | Update            |
| `/flow-submissions/analytics/summary`    | GET    | Dashboard data    |
| `/flow-submissions/export/csv`           | GET    | CSV export        |

All endpoints require `Authorization: Bearer <token>` header.

---

**Ready to integrate!** 🚀
