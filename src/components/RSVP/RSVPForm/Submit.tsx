import { ArrowLeft, CheckIcon } from "lucide-react";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "~/components/Button";
import { type ParsedGuest } from "~/types/guests.types";
import { getDietaryRequirementsText } from "./DietaryRequirements";
import Image from "next/image";
import { FormField } from "~/components/Form";
import { getGuestFirstName } from "./RSVP";

export function Submit({
  form,
  onSubmit,
  isLoading,
  errorMessage,
  onClickBack,
}: {
  form: UseFormReturn<ParsedGuest>;
  onSubmit: () => void;
  isLoading: boolean;
  errorMessage: string | null;
  onClickBack: () => void;
}) {
  const isComing = form.watch("rsvp");
  const dietaryRequirements = form.watch("dietaryRequirements");
  const hasPlusOne = form.watch("hasPlusOne");
  const plusOneRSVP = form.watch("plusOneRSVP");
  const plusOneName = form.watch("plusOneName");
  const plusOneFirstName = plusOneName
    ? getGuestFirstName(plusOneName ?? "")
    : null;

  const plusOneDietaryRequirements = form.watch("plusOneDietaryRequirements");

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-col items-center overflow-y-scroll">
        <Image
          src="/wedding_svgs/Others/5.svg"
          alt="dove"
          width={80}
          height={80}
        />

        <div>
          <h2 className="text-center">Confirm RSVP?</h2>

          <div className="mt-4 text-base">
            <div>
              Coming:{" "}
              <span className="font-semibold">{isComing ? "Yes" : "No"}</span>
            </div>

            {isComing ? (
              <div>
                Your dietary Requirements:{" "}
                <span className="font-semibold">
                  {getDietaryRequirementsText(dietaryRequirements)}
                </span>
              </div>
            ) : null}

            {hasPlusOne ? (
              <>
                <div>
                  {plusOneFirstName ?? "Plus one"} is coming:{" "}
                  <span className="font-semibold">
                    {plusOneRSVP ? "Yes" : "No"}
                  </span>
                </div>

                {plusOneDietaryRequirements ? (
                  <div>
                    {plusOneFirstName ?? "Your plus one"}&apos;s dietary
                    requirements:{" "}
                    <span className="font-semibold">
                      {getDietaryRequirementsText(plusOneDietaryRequirements)}
                    </span>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field: { value, onChange } }) => {
              return (
                <div className="mt-2 flex flex-col">
                  <label
                    className="mt-4 text-sm font-semibold"
                    htmlFor="message"
                  >
                    Message (optional)
                  </label>

                  <textarea
                    id="message"
                    value={value ?? ""}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                    className="mt-2 h-24 w-full resize-none rounded-md border border-gray-300 p-2 text-sm"
                  />
                </div>
              );
            }}
          />
        </div>

        {errorMessage ? (
          <div className="text-red-600">
            Sorry, something went wrong - please contact us at
            ruthieandloz@gmail.com.
          </div>
        ) : null}
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={onClickBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button onClick={onSubmit} className="gap-1" isLoading={isLoading}>
          Submit
          <CheckIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
