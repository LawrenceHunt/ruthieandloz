import { type UseFormReturn } from "react-hook-form";
import Image from "next/image";
import { type ParsedGuest } from "~/types/guests.types";
import { FormField, FormItem } from "../../Form";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getGuestFirstName } from "./RSVP";
import { cn } from "~/lib/cn.util";

export function PlusOneRSVP({
  form,
  onSubmit,
  onClickBack,
}: {
  form: UseFormReturn<ParsedGuest>;
  onSubmit: () => void;
  onClickBack: () => void;
}) {
  const { control, watch } = form;

  const plusOneName = watch("plusOneName");

  const plusOneFirstName = plusOneName
    ? getGuestFirstName(plusOneName ?? "")
    : null;

  const plusOneRSVP = watch("plusOneRSVP");

  return (
    <div className="flex h-full flex-col items-center justify-between">
      <Image
        src="/wedding_svgs/Others/7.svg"
        alt="dove"
        width={80}
        height={80}
      />

      {plusOneName ? (
        <h2 className="mt-4">
          Can{" "}
          <span className="font-semibold">
            {plusOneFirstName ?? "your plus one"}
          </span>{" "}
          come?
        </h2>
      ) : (
        <h2>Are you bringing a plus one?</h2>
      )}

      <div className="text-base">
        <FormField
          control={control}
          name="plusOneRSVP"
          render={({ fieldState: { error, isTouched }, field: { value } }) => {
            return (
              <FormItem>
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
                  <div className="mt-2">
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
              <FormItem
                className={cn(
                  plusOneRSVP ? "opacity-100" : "opacity-0",
                  "transition-opacity duration-300",
                )}
              >
                <h2 className="mt-4 text-lg">
                  And do they have any dietary requirements?
                </h2>

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

                <div className="flex gap-2"></div>

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
                    value={
                      value?.startsWith("other") ? value.split(":")[1] : ""
                    }
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
      </div>

      <div className="flex w-full justify-between gap-4">
        <Button onClick={onClickBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button onClick={onSubmit} className="gap-1">
          Next
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
