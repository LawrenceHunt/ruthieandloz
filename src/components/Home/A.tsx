import Link from "next/link";
import { cn } from "~/lib/cn.util";

export function A({
  children,
  href,
  className,
  target = "_blank",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={cn("text-pink1 hover:underline", className)}
    >
      {children}
    </Link>
  );
}
