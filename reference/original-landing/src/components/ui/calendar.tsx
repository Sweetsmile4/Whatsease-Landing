'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  style,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      /* Override react-day-picker v9 CSS variables to emerald-600 */
      style={
        {
          '--rdp-accent-color': '#04b851',
          '--rdp-accent-background-color': '#dcfce7',
          '--rdp-range_start-color': '#ffffff',
          '--rdp-range_end-color': '#ffffff',
          '--rdp-range_middle-color': '#14532d',
          '--rdp-range_middle-background-color': '#dcfce7',
          '--rdp-range_start-date-background-color': '#04b851',
          '--rdp-range_end-date-background-color': '#04b851',
          '--rdp-selected-border': 'none',
          ...style,
        } as React.CSSProperties
      }
      classNames={{
        months: 'flex flex-col sm:flex-row gap-6',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 relative items-center h-8',
        caption_label: 'text-sm font-semibold text-gray-800',
        nav: 'absolute inset-x-0 top-0 flex items-center justify-between px-1',
        button_previous: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 p-0 opacity-60 hover:opacity-100',
        ),
        button_next: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 p-0 opacity-60 hover:opacity-100',
        ),
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday:
          'text-gray-400 w-9 font-medium text-[0.75rem] text-center mb-1',
        week: 'flex w-full',
        day: cn(
          'relative h-9 w-9 p-0 text-center text-sm',
          'focus-within:relative focus-within:z-20',
        ),
        day_button: cn(
          'h-9 w-9 p-0 font-normal rounded-full',
          'transition-colors duration-100',
          'hover:bg-emerald-50',
          'aria-selected:opacity-100',
        ),
        range_start: 'rdp-range_start',
        range_end: 'rdp-range_end',
        range_middle: 'rdp-range_middle',
        selected: 'rdp-selected',
        today: '[&>button]:font-bold [&>button]:text-emerald-700',
        outside:
          'opacity-40',
        disabled: 'opacity-30 pointer-events-none',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === 'left') {
            return <ChevronLeft className="h-4 w-4" />;
          }
          return <ChevronRight className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
