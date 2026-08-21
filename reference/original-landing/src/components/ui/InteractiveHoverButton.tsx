import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// No need for a separate interface, use the type directly
export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'group relative w-auto cursor-pointer overflow-hidden rounded-full border-4 border-white bg-[#04B851] p-3 px-6 text-center font-semibold text-white transition-all duration-500 hover:px-8',
        'hover:border-white hover:bg-black',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        {/* Static text that doesn't move */}
        <span className="">{children}</span>

        {/* Container for the dot and arrow */}
        <div className="relative flex h-6 w-6 items-center justify-center">
          {/* White dot that disappears on hover */}
          <div className="absolute h-2 w-2 rounded-full bg-white transition-all duration-500 group-hover:scale-0 group-hover:opacity-0"></div>

          {/* Arrow that appears on hover */}
          <ArrowRight className="absolute translate-x-4 scale-0 text-4xl transition-all duration-500 group-hover:translate-x-0 group-hover:scale-100" />
        </div>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = 'InteractiveHoverButton';
