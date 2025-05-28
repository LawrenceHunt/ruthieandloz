import { useState } from "react";
import { Button } from "../Button";
import { cn } from "~/lib/cn.util";

export function CopyButton({
  text,
  buttonText,
  className,
}: {
  text: string;
  buttonText?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      className={cn("", className)}
      onClick={() => {
        void navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
    >
      {copied ? "Copied!" : (buttonText ?? "Copy to clipboard")}
    </Button>
  );
}
