import { ArrowLeft, CheckIcon } from "lucide-react";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "~/components/Button";
import { type ParsedGuest } from "~/types/guests.types";
import { getDietaryRequirementsText } from "./DietaryRequirements";

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
  const plusOneRSVP = form.watch("plusOneRSVP");
  const plusOneName = form.watch("plusOneName");
  const plusOneDietaryRequirements = form.watch("plusOneDietaryRequirements");

  return (
    <>
      <h2>Complete RSVP?</h2>

      <div>
        Coming: <span className="font-semibold">{isComing ? "Yes" : "No"}</span>
      </div>

      {isComing ? (
        <div>
          Your dietary Requirements:{" "}
          <span className="font-semibold">
            {getDietaryRequirementsText(dietaryRequirements)}
          </span>
        </div>
      ) : null}

      {plusOneRSVP ? (
        <>
          <div>
            {plusOneName ?? "Your plus one"} is coming:{" "}
            <span className="font-semibold">{plusOneRSVP ? "Yes" : "No"}</span>
          </div>

          {plusOneDietaryRequirements ? (
            <div>
              {plusOneName ?? "Your plus one"}&apos;s dietary requirements:{" "}
              <span className="font-semibold">
                {getDietaryRequirementsText(plusOneDietaryRequirements)}
              </span>
            </div>
          ) : null}
        </>
      ) : null}

      <div className="mt-8 flex justify-between gap-4">
        <Button onClick={onClickBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button onClick={onSubmit} className="gap-1" isLoading={isLoading}>
          Submit RSVP
          <CheckIcon className="h-4 w-4" />
        </Button>
      </div>

      {errorMessage ? <div className="text-red-600">{errorMessage}</div> : null}
    </>
  );
}
