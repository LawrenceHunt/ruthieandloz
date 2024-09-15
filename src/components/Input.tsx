import { forwardRef } from "react";
import { cn } from "~/lib/cn.util";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-lg border-2 border-slate-200 bg-transparent px-2 py-1 text-xl outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
