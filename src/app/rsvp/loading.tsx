import { LoadSpinner } from "~/components/LoadSpinner";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoadSpinner />
    </div>
  );
}
