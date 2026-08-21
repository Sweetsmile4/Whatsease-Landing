'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SegmentedOption<T extends string> {
  id: T;
  label: string;
}

interface SegmentedToggleProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedOption<T>[];
  className?: string;
}

export default function SegmentedToggle<T extends string>({
  value,
  onChange,
  options,
  className,
}: SegmentedToggleProps<T>) {
  return (
    <div
      className={cn(
        'inline-flex rounded-lg border border-gray-200 bg-white p-0.5',
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={cn(
            'rounded-md px-3 py-1 text-xs font-medium transition-colors',
            value === opt.id
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-500 hover:text-gray-800',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
