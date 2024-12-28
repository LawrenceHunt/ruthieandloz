import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "~/components/Button";
import { FormField, FormItem } from "~/components/Form";
import { Input } from "~/components/Input";
import { type ParsedGuest } from "~/types/guests.types";

export function getGuestFirstName(name: string) {
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
  const { watch, formState } = form;

  const hasPlusOne = watch("hasPlusOne");

  const plusOneName = watch("plusOneName");

  const plusOneFirstName = plusOneName
    ? getGuestFirstName(plusOneName ?? "")
    : null;

  const email = watch("email");

  const firstName = getGuestFirstName(form.watch("name"));

  return (
    <div className="flex h-full w-full flex-col items-center text-base">
      <Image
        src="/wedding_svgs/Flowers/1.svg"
        alt="flowers"
        width={80}
        height={80}
      />

      <div className="mt-2">
        <h2 className="text-center">
          Hi, {firstName}
          {hasPlusOne
            ? plusOneFirstName
              ? " and " + plusOneFirstName
              : " (plus one)"
            : ""}
          !
        </h2>

        <h2>Can you come to our wedding?</h2>
      </div>

      {/* main RSVP here */}
      <FormField
        control={form.control}
        name="rsvp"
        render={({ fieldState: { error, isTouched }, field: { value } }) => {
          return (
            <div className="flex w-full flex-col items-center">
              <FormItem className="mt-4 w-full">
                <div className="flex w-full max-w-[300px] items-center justify-between gap-4 px-10">
                  {/* if no plus one, no need to distinguish as 
                  there's only one RSVP decision to make here */}
                  {hasPlusOne ? (
                    <label className="text-base">{firstName}:</label>
                  ) : null}

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        id="yes"
                        checked={Boolean(
                          (form.getValues("hasRSVPd") || isTouched) && value,
                        )}
                        onChange={() => {
                          form.setValue("rsvp", true, { shouldTouch: true });
                        }}
                      />
                      <label htmlFor="yes" className="text-sm">
                        Yes
                      </label>
                    </div>

                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        id="no"
                        checked={Boolean(
                          (form.getValues("hasRSVPd") || isTouched) && !value,
                        )}
                        onChange={() => {
                          form.setValue("rsvp", false, { shouldTouch: true });
                        }}
                      />
                      <label htmlFor="no" className="text-sm">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div>{error?.message ?? ""}</div>
              </FormItem>
            </div>
          );
        }}
      />

      {/* Plus one RSVP */}
      {hasPlusOne ? (
        <FormField
          control={form.control}
          name="plusOneRSVP"
          render={({ fieldState: { error, isTouched }, field: { value } }) => {
            return (
              <div className="flex w-full flex-col items-center">
                <FormItem className="mt-2 w-full">
                  <div className="flex w-full max-w-[300px] justify-between gap-4 px-10">
                    <label className="text-base">
                      {/* Possible we could give someone an unnamed plus one */}
                      {plusOneFirstName ?? "Your plus one"}:
                    </label>

                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          id="yes"
                          checked={Boolean(
                            (form.getValues("hasRSVPd") || isTouched) && value,
                          )}
                          onChange={() =>
                            form.setValue("plusOneRSVP", true, {
                              shouldTouch: true,
                            })
                          }
                        />

                        <label htmlFor="yes" className="text-sm">
                          Yes
                        </label>
                      </div>

                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          id="no"
                          checked={Boolean(
                            (form.getValues("hasRSVPd") || isTouched) && !value,
                          )}
                          onChange={() => {
                            form.setValue("plusOneRSVP", false, {
                              shouldTouch: true,
                            });
                          }}
                        />
                        <label htmlFor="no" className="text-sm">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>{error?.message ?? ""}</div>
                </FormItem>
              </div>
            );
          }}
        />
      ) : null}

      <h2 className="mt-4 text-center">
        Can you confirm your email address, so we can send you any updates?
      </h2>

      <FormField
        control={form.control}
        name="email"
        render={({ field: { value } }) => {
          return (
            <FormItem className="mt-4 w-full text-base">
              <Input
                type="email"
                placeholder="Email"
                value={value ?? ""}
                onChange={(e) => form.setValue("email", e.target.value)}
                className="text-base"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSubmit();
                  }
                }}
              />
            </FormItem>
          );
        }}
      />

      <div className="mt-auto flex w-full gap-4">
        <Button onClick={onClickBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          RSVP
        </Button>

        <Button
          disabled={
            !(
              formState.touchedFields.rsvp &&
              !(hasPlusOne && !formState.touchedFields.plusOneRSVP) &&
              email &&
              email.length > 0
            )
          }
          onClick={onSubmit}
          className="gap-1"
        >
          Dietary
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
