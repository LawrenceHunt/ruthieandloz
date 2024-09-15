"use client";

import { useFormContext, type UseFormReturn } from "react-hook-form";
import { FormField, FormItem } from "../../Form";
import { type ParsedGuest } from "~/types/guests.types";
import { Button } from "~/components/Button";
import { useRef } from "react";
import { Input } from "~/components/Input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export function getDietaryRequirementsText(requirements: string) {
  if (requirements === "none") {
    return "None";
  }

  if (requirements === "vegetarian") {
    return "Vegetarian";
  }

  if (requirements.startsWith("other:")) {
    return requirements.split(":")[1];
  }

  return "";
}

export function DietaryRequirements({
  form,
  onSubmit,
  onClickBack,
}: {
  form: UseFormReturn<ParsedGuest>;
  onSubmit: () => void;
  onClickBack: () => void;
}) {
  const otherInputRef = useRef<HTMLInputElement>(null);

  const { setValue } = useFormContext();

  return (
    <FormField
      control={form.control}
      name="dietaryRequirements"
      render={({ fieldState: { error }, field: { value } }) => {
        return (
          <div className="flex h-full flex-col items-center justify-between">
            <Image
              src="/wedding_svgs/Dinner/Food/7.svg"
              alt="dinner"
              width={140}
              height={140}
            />

            <h2 className="mt-4 text-center">
              We&apos;re so glad! And do you have any dietary requirements we
              should know about?
            </h2>

            <FormItem className="mt-4 w-full text-base">
              <div className="flex w-full gap-2">
                <input
                  type="radio"
                  id="none"
                  checked={value === "none"}
                  onChange={() => {
                    setValue("dietaryRequirements", "none", {
                      shouldTouch: true,
                    });
                  }}
                />
                <label htmlFor="none">None</label>

                <input
                  type="radio"
                  id="vegetarian"
                  checked={value === "vegetarian"}
                  onChange={() => {
                    setValue("dietaryRequirements", "vegetarian", {
                      shouldTouch: true,
                    });
                  }}
                />
                <label htmlFor="vegetarian">Vegetarian</label>
              </div>

              <div className="flex w-full flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="other"
                    checked={value.startsWith("other:")}
                    onChange={() => {
                      setValue("dietaryRequirements", "other:", {
                        shouldTouch: true,
                      });
                      setTimeout(() => {
                        otherInputRef.current?.focus();
                      }, 100);
                    }}
                  />
                  <label htmlFor="other">Other</label>
                </div>

                <Input
                  ref={otherInputRef}
                  type="text"
                  disabled={!value.startsWith("other")}
                  value={
                    value.startsWith("other:")
                      ? getDietaryRequirementsText(value)
                      : ""
                  }
                  placeholder="Please specify"
                  onChange={(e) => {
                    setValue("dietaryRequirements", `other:${e.target.value}`, {
                      shouldTouch: true,
                    });
                  }}
                />
              </div>

              <div>{error?.message ?? ""}</div>
            </FormItem>

            <div className="mt-4 flex w-full gap-4">
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
      }}
    />
  );
}
