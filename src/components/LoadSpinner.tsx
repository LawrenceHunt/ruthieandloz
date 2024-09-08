import { Loader2Icon } from "lucide-react";
import { cn } from "~/lib/cn.util";

export function LoadSpinner({ className }: { className?: string }) {
  return <Loader2Icon className={cn("animate-spin", className)} />;
}
