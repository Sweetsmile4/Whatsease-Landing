import React from 'react';

interface Props {
  title: string;
  description?: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * SettingCard — a consistent bordered card wrapper used across all settings tabs.
 * Standardises the header-with-title + body-content pattern.
 *
 * Lives in `src/components/common/` so it is available to ALL feature modules,
 * not just integrations.
 */
const SettingCard: React.FC<Props> = ({
  title,
  description,
  headerRight,
  children,
  className = '',
}) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <div>
        <h2 className="text-lg font-medium">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      {headerRight && <div>{headerRight}</div>}
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export default SettingCard;
