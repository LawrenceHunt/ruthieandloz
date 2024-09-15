import { ArrowLeft, ArrowRight } from "lucide-react";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "~/components/Button";
import { FormField, FormItem } from "~/components/Form";
import { type ParsedGuest } from "~/types/guests.types";

function getGuestFirstName(name: string) {
  return name.split(" ")[0];
}

export function RSVP({
  form,
  onSubmit,
  onClickBack,
}: {
  form: UseFormReturn<ParsedGuest>;
  onSubmit: () => void;
  onClickBack: () => void;
}) {
  return (
    <>
      <h2>Hi, {getGuestFirstName(form.getValues("name"))}!</h2>
      <h2>So - can you come to our wedding?</h2>

      <FormField
        control={form.control}
        name="rsvp"
        render={({ fieldState: { error, isTouched }, field: { value } }) => {
          return (
            <>
              <FormItem>
                <div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="yes"
                      checked={
                        (form.getValues("hasRSVPd") || isTouched) && value
                      }
                      onChange={() =>
                        form.setValue("rsvp", true, { shouldTouch: true })
                      }
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="no"
                      checked={
                        (form.getValues("hasRSVPd") || isTouched) && !value
                      }
                      onChange={() => {
                        form.setValue("rsvp", false, { shouldTouch: true });
                      }}
                    />
                    <label htmlFor="no">No</label>
                  </div>

                  <div>{error?.message ?? ""}</div>
                </div>
              </FormItem>

              <div className="mt-8 flex justify-between gap-4">
                <Button onClick={onClickBack} className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>

                <Button
                  disabled={!isTouched}
                  onClick={onSubmit}
                  className="gap-1"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          );
        }}
      />
    </>
  );
}
