import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

function Loader({
  className,
  label = "Loading...",
  showLabel = true,
}: {
  className?: string
  label?: string
  showLabel?: boolean
}) {
  return (
    <div
      className={cn(
        "flex min-h-[220px] w-full flex-col items-center justify-center gap-3 text-muted-foreground",
        className,
      )}
    >
      <Spinner className="size-8 text-primary" />
      {showLabel ? <p className="text-sm">{label}</p> : null}
    </div>
  )
}

export { Loader, Spinner }
