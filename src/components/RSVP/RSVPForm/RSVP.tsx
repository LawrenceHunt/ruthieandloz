import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
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
    <FormField
      control={form.control}
      name="rsvp"
      render={({ fieldState: { error, isTouched }, field: { value } }) => {
        return (
          <div className="flex h-full w-full flex-col items-center justify-between">
            <Image
              src="/wedding_svgs/flowers/1.svg"
              alt="flowers"
              width={140}
              height={140}
            />

            <div>
              <h2 className="text-center">
                Hi, {getGuestFirstName(form.watch("name"))}!
              </h2>

              <h2>Can you come to our wedding?</h2>
            </div>

            <FormItem className="mt-4">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="yes"
                  checked={(form.getValues("hasRSVPd") || isTouched) && value}
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
                  checked={(form.getValues("hasRSVPd") || isTouched) && !value}
                  onChange={() => {
                    form.setValue("rsvp", false, { shouldTouch: true });
                  }}
                />
                <label htmlFor="no">No</label>
              </div>

              <div>{error?.message ?? ""}</div>
            </FormItem>

            <div className="flex w-full gap-4">
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
          </div>
        );
      }}
    />
  );
}
