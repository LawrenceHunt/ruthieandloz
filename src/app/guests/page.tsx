import { GuestsTable } from "~/components/Guests/GuestsTable";

export default async function GuestsPage() {
  return (
    <div className="overflow-x-auto p-4">
      <GuestsTable />
    </div>
  );
}
