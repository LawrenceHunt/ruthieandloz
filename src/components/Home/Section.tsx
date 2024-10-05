import { cn } from "~/lib/cn.util";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center pt-8",
        "text-lg",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function BodySection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto mt-8 flex w-[400px] max-w-full flex-col items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
