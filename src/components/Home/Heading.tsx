import { cn } from "~/lib/cn.util";

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("font-reinkies text-[60px]", className)}>{children}</h2>
  );
}
