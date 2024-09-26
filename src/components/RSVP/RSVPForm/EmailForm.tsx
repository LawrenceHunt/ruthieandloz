"use client";

import { useFormContext, type UseFormReturn } from "react-hook-form";
import { type ParsedGuest } from "~/types/guests.types";
import { FormField, FormItem } from "../../Form";
import { Button } from "~/components/Button";
import Image from "next/image";
import { Input } from "~/components/Input";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function EmailForm({
  form,
  onSubmit,
  onClickBack,
}: {
  form: UseFormReturn<ParsedGuest>;
  onSubmit: () => void;
  onClickBack: () => void;
}) {
  const { setValue } = useFormContext();

  return (
    <FormField
      control={form.control}
      name="email"
      render={({ fieldState: { error }, field: { value } }) => {
        return (
          <div className="flex h-full flex-col items-center justify-between">
            <Image
              src="/wedding_svgs/Email/Email.svg"
              alt="email"
              width={140}
              height={140}
            />

            <h2 className="mt-4 text-center">
              What&apos;s your email address?
            </h2>

            <FormItem className="mt-4 w-full text-base">
              <Input
                type="email"
                placeholder="Email"
                value={value}
                onChange={(e) => setValue("email", e.target.value)}
              />
            </FormItem>

            <div className="mt-4 flex w-full gap-4">
              <Button onClick={onClickBack} className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>

              <Button
                onClick={async () => {
                  onSubmit();
                  await form.trigger("dietaryRequirements");
                }}
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
