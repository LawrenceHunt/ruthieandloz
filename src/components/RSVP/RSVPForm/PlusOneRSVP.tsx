import { type UseFormReturn } from "react-hook-form";
import { type ParsedGuest } from "~/types/guests.types";
import { FormField, FormItem } from "../../Form";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PlusOneRSVP({
  form,
  onSubmit,
  onClickBack,
}: {
  form: UseFormReturn<ParsedGuest>;
  onSubmit: () => void;
  onClickBack: () => void;
}) {
  const { control, getValues } = form;

  const plusOneName = getValues("plusOneName");

  return (
    <>
      <FormField
        control={control}
        name="plusOneRSVP"
        render={({ fieldState: { error, isTouched }, field: { value } }) => {
          return (
            <FormItem>
              <div>
                {plusOneName ? (
                  <h2>
                    Can{" "}
                    <span className="font-semibold">
                      {form.getValues("plusOneName") ?? "your plus one"}
                    </span>{" "}
                    come?
                  </h2>
                ) : (
                  <h2>Are you bringing a plus one?</h2>
                )}

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="yes"
                    checked={Boolean(value)}
                    onChange={() => {
                      form.setValue("plusOneRSVP", true, { shouldTouch: true });
                    }}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="no"
                    checked={
                      (isTouched || form.getValues("hasRSVPd")) && !value
                    }
                    onChange={() => {
                      form.setValue("plusOneRSVP", false, {
                        shouldTouch: true,
                      });
                    }}
                  />
                  <label htmlFor="no">No</label>
                </div>

                <div>{error?.message ?? ""}</div>
              </div>
            </FormItem>
          );
        }}
      />

      {plusOneName ? null : (
        <FormField
          control={control}
          name="plusOneName"
          render={({
            fieldState: { error },
            field: { onChange, value, onBlur },
          }) => {
            return (
              <FormItem>
                <div>
                  <h2>What&apos;s your plus one&apos;s name?</h2>

                  <Input
                    type="text"
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                  />

                  <div>{error?.message ?? ""}</div>
                </div>
              </FormItem>
            );
          }}
        />
      )}

      <FormField
        control={control}
        name="plusOneDietaryRequirements"
        render={({ fieldState: { error }, field: { value, onChange } }) => {
          return (
            <FormItem>
              <h2>And do they have any dietary requirements?</h2>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="none"
                  checked={value === "none"}
                  onChange={() => {
                    onChange("none");
                  }}
                />
                <label htmlFor="none">None</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="vegetarian"
                  checked={value === "vegetarian"}
                  onChange={() => {
                    onChange("vegetarian");
                  }}
                />
                <label htmlFor="vegetarian">Vegetarian</label>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="other"
                    checked={value?.startsWith("other:")}
                    onChange={() => {
                      onChange("other:");
                    }}
                  />
                  <label htmlFor="other">Other</label>
                </div>

                <input
                  type="text"
                  disabled={!value?.startsWith("other")}
                  value={value?.startsWith("other") ? value.split(":")[1] : ""}
                  className="w-full rounded-lg border-2 border-slate-200 px-2 py-1 text-xl outline-none"
                  onChange={(e) => {
                    onChange(`other:${e.target.value}`);
                  }}
                />
              </div>

              <div>{error?.message ?? ""}</div>
            </FormItem>
          );
        }}
      />

      <div className="mt-8 flex justify-between gap-4">
        <Button onClick={onClickBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button onClick={onSubmit} className="gap-1">
          Next
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
