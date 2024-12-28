"use client";

import { type UseFormReturn } from "react-hook-form";
import { FormField, FormItem } from "../../Form";
import { type ParsedGuest } from "~/types/guests.types";
import { Button } from "~/components/Button";
import { useRef } from "react";
import { Input } from "~/components/Input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getGuestFirstName } from "./RSVP";

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
  const { watch } = form;

  const firstName = getGuestFirstName(form.watch("name"));

  const hasPlusOne = watch("hasPlusOne");

  const plusOneName = watch("plusOneName");

  const plusOneFirstName = plusOneName
    ? getGuestFirstName(plusOneName ?? "")
    : null;

  const inputRef = useRef<HTMLInputElement>(null);

  const plusOneInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-full w-full flex-col text-base">
      <div className="flex h-full flex-col items-center overflow-y-scroll">
        <Image
          src="/wedding_svgs/Dinner/Food/7.svg"
          alt="dinner"
          width={80}
          height={80}
        />

        <h2 className="mt-4 text-center">
          And do you have any dietary requirements we should know about?
        </h2>

        <FormField
          control={form.control}
          name="dietaryRequirements"
          render={({ fieldState: { error }, field: { value } }) => {
            return (
              <div className="flex flex-col items-center">
                <FormItem className="mt-4 w-full text-base">
                  {/* if no plus one, no need to distinguish as 
                  there's only one RSVP decision to make here */}
                  {hasPlusOne ? (
                    <label className="text-base">{firstName}:</label>
                  ) : null}

                  <div className="flex w-full gap-2">
                    <input
                      type="radio"
                      id="none"
                      checked={value === "none"}
                      onChange={() => {
                        form.setValue("dietaryRequirements", "none", {
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
                        form.setValue("dietaryRequirements", "vegetarian", {
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
                          form.setValue("dietaryRequirements", "other:", {
                            shouldTouch: true,
                          });
                          setTimeout(() => {
                            inputRef.current?.focus();
                          }, 100);
                        }}
                      />
                      <label htmlFor="other">Other</label>
                    </div>

                    <Input
                      className="text-base"
                      ref={inputRef}
                      type="text"
                      disabled={!value.startsWith("other")}
                      value={
                        value.startsWith("other:")
                          ? getDietaryRequirementsText(value)
                          : ""
                      }
                      placeholder="Please specify"
                      onChange={(e) => {
                        form.setValue(
                          "dietaryRequirements",
                          `other:${e.target.value}`,
                          {
                            shouldTouch: true,
                          },
                        );
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          onSubmit();
                        }
                      }}
                    />
                  </div>

                  <div>{error?.message ?? ""}</div>
                </FormItem>
              </div>
            );
          }}
        />

        {hasPlusOne ? (
          <FormField
            control={form.control}
            name="plusOneDietaryRequirements"
            render={({ fieldState: { error }, field: { value } }) => {
              return (
                <div className="flex flex-col items-center">
                  <FormItem className="mt-4 w-full text-base">
                    <label className="text-base">
                      {plusOneFirstName ?? "Your plus one"}:
                    </label>

                    <div className="flex w-full gap-2">
                      <input
                        type="radio"
                        id="none"
                        checked={value === "none"}
                        onChange={() => {
                          form.setValue("dietaryRequirements", "none", {
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
                          form.setValue(
                            "plusOneDietaryRequirements",
                            "vegetarian",
                            {
                              shouldTouch: true,
                            },
                          );
                        }}
                      />
                      <label htmlFor="vegetarian">Vegetarian</label>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          id="other"
                          checked={Boolean(value?.startsWith("other:"))}
                          onChange={() => {
                            form.setValue(
                              "plusOneDietaryRequirements",
                              "other:",
                              {
                                shouldTouch: true,
                              },
                            );
                            setTimeout(() => {
                              plusOneInputRef.current?.focus();
                            }, 100);
                          }}
                        />
                        <label htmlFor="other">Other</label>
                      </div>

                      <Input
                        className="text-base"
                        ref={plusOneInputRef}
                        type="text"
                        disabled={Boolean(!value?.startsWith("other"))}
                        value={
                          value?.startsWith("other:")
                            ? getDietaryRequirementsText(value)
                            : ""
                        }
                        placeholder="Please specify"
                        onChange={(e) => {
                          form.setValue(
                            "plusOneDietaryRequirements",
                            `other:${e.target.value}`,
                            {
                              shouldTouch: true,
                            },
                          );
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            onSubmit();
                          }
                        }}
                      />
                    </div>

                    <div>{error?.message ?? ""}</div>
                  </FormItem>
                </div>
              );
            }}
          />
        ) : null}
      </div>

      <div className="mt-4 flex w-full gap-4">
        <Button onClick={onClickBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button
          onClick={async () => {
            // validate the form
            const response1 = await form.trigger("dietaryRequirements");
            const response2 = hasPlusOne
              ? await form.trigger("plusOneDietaryRequirements")
              : true;

            if (response1 && response2) {
              onSubmit();
            }
          }}
          className="gap-1"
        >
          Review
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
