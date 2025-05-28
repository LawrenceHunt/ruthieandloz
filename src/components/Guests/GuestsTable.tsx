"use client";

import { useState } from "react";
import { cn } from "~/lib/cn.util";
import { api } from "~/trpc/react";
import { CopyButton } from "./CopyButton";

const GUEST_STATUS_OPTIONS = [
  "all",
  "no-rsvp",
  "attending",
  "not-attending",
] as const;

type GuestRSVPStatus = (typeof GUEST_STATUS_OPTIONS)[number];

type Option = {
  label: string;
  value: GuestRSVPStatus;
};

function RadioGroup({
  options,
  value,
  onSelectOption,
}: {
  options: Array<Option>;
  value: GuestRSVPStatus;
  onSelectOption: (value: GuestRSVPStatus) => void;
}) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900">Show Guests</h1>
      <div className="flex items-center gap-4 py-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              id={option.value}
              name="guest-status"
              value={option.value}
              checked={value === option.value}
              onChange={() => onSelectOption(option.value)}
              className={cn(
                "h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                "focus:ring-offset-0",
              )}
            />
            <label
              htmlFor={option.value}
              className="text-sm font-medium text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GuestsTable() {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState(false);

  const [showing, setShowing] = useState<GuestRSVPStatus>("all");

  const { data, error, isLoading } = api.guests.getGuests.useQuery(
    { password },
    { enabled: !!password && !!confirmPassword },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data && confirmPassword) {
    return <div>No data found</div>;
  }

  const filteredGuests = data?.guests.length
    ? data.guests.filter((guest) => {
        if (showing === "all") {
          return true;
        }

        if (showing === "no-rsvp") {
          return !guest.hasRSVPd;
        }

        if (showing === "attending") {
          return guest.hasRSVPd && guest.rsvp;
        }

        if (showing === "not-attending") {
          return guest.hasRSVPd && !guest.rsvp;
        }

        return false;
      })
    : [];

  const sortedGuests = filteredGuests.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const totalRSVPsForCurrentFilter = filteredGuests.filter((row) => {
    return row.hasRSVPd;
  }).length;

  const totalInvitedForCurrentFilter = filteredGuests.reduce((total, row) => {
    if (row.hasPlusOne) {
      return total + 2;
    }
    return total + 1;
  }, 0);

  const totalAttendingForCurrentFilter = filteredGuests.reduce((total, row) => {
    let totalComingForRow = 0;

    if (row.hasRSVPd && row.rsvp) {
      totalComingForRow += 1;
      if (row.hasPlusOne && row.plusOneRSVP) {
        totalComingForRow += 1;
      }
    }

    return total + totalComingForRow;
  }, 0);

  return (
    <>
      {data?.guests.length ? null : (
        <form
          className="flex max-w-[400px] flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setConfirmPassword((prev) => !prev);
          }}
        >
          <input
            type="password"
            placeholder="Enter password to see guest list"
            value={password}
            onChange={(e) => {
              if (!data?.auth) {
                setConfirmPassword(false);
              }
              setPassword(e.target.value);
            }}
            className="rounded border border-gray-300 p-2"
          />
          <button
            type="submit"
            className="rounded bg-pink1 px-4 py-2 text-white"
          >
            {confirmPassword ? "Hide Guest List" : "Show Guest List"}
          </button>
        </form>
      )}

      {data?.guests.length ? (
        <>
          <div className="flex items-center py-4">
            <RadioGroup
              value={showing}
              onSelectOption={(option) => {
                setShowing(option);
              }}
              options={GUEST_STATUS_OPTIONS.map((option) => ({
                label: option.replace(/-/g, " "),
                value: option,
              }))}
            />

            <div className="ml-auto">
              <CopyButton
                className="w-[150px]"
                text={sortedGuests.map((guest) => guest.name).join("\n")}
                buttonText="Copy names"
              />
            </div>
          </div>

          <table className="">
            <thead>
              <tr className="[&>th]:p-2">
                <th>Rows</th>
                <th>Guests</th>
                <th>Rows RSVPd</th>
                <th>Total Attending</th>
              </tr>
            </thead>
            <tbody>
              <tr className="[&>td]:text-nowrap [&>td]:p-2">
                <td>{filteredGuests.length}</td>
                <td>{totalInvitedForCurrentFilter}</td>
                <td>{totalRSVPsForCurrentFilter}</td>
                <td>{totalAttendingForCurrentFilter}</td>
              </tr>
            </tbody>
          </table>

          <hr className="py-4" />

          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="[&>th]:text-nowrap [&>th]:p-2 [&>th]:text-left [&>th]:text-sm [&>th]:font-medium [&>th]:text-gray-600">
                <th>#</th>
                <th>Name</th>
                <th>RSVP Status</th>
                <th>Dietary Requirements</th>
                <th>+1</th>
                <th>+1 RSVP</th>
                <th>+1 Dietary Requirements</th>
              </tr>
            </thead>
            <tbody>
              {sortedGuests.map((guest, index) => (
                <tr
                  key={guest.id}
                  className="border-b [&>td]:text-nowrap [&>td]:p-2 [&>td]:text-sm"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{guest.name}</td>
                  <td className="px-4 py-2">
                    {guest.hasRSVPd
                      ? guest.rsvp
                        ? "Attending"
                        : "Not Attending"
                      : "No RSVP"}
                  </td>
                  <td className="px-4 py-2">
                    {guest.hasRSVPd ? guest.dietaryRequirements : null}
                  </td>
                  <td className="px-4 py-2">{guest.plusOneName}</td>
                  <td className="px-4 py-2">
                    {guest.hasPlusOne
                      ? guest.hasRSVPd
                        ? guest.plusOneRSVP
                          ? "Attending"
                          : "Not Attending"
                        : "No RSVP"
                      : ""}
                  </td>
                  <td className="px-4 py-2">
                    {guest.hasRSVPd && guest.hasPlusOne && guest.plusOneRSVP
                      ? guest.plusOneDietaryRequirements
                      : null}
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href={`mailto:${guest.email}`}
                      className="text-blue-500 hover:underline"
                    >
                      {guest.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
}
