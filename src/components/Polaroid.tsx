import Image from "next/image";
import { cn } from "~/lib/cn.util";

export function PolaroidImage({
  src,
  caption,
  className,
}: {
  src: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-sm bg-white p-4 pb-12 shadow-lg", className)}>
      <Image
        src={src}
        className="h-full w-full rounded-md object-cover"
        width={3000}
        height={3000}
        alt="Photo"
      />

      {caption ? (
        <p className="mt-2 text-center text-sm text-slate-600">{caption}</p>
      ) : null}
    </div>
  );
}
