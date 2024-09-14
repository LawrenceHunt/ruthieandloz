"use client";

import { useWatch } from "react-hook-form";
import { type ParsedGuest } from "~/types/guests.types";
import { useState } from "react";
import { Form } from "../../Form";
import { DietaryRequirements } from "./DietaryRequirements";
import { RSVP } from "./RSVP";
import { PlusOneRSVP } from "./PlusOneRSVP";
import { useRSVP } from "./useRSVP";
import { Submit } from "./Submit";
import { AnimateIn } from "~/components/AnimateIn";

type FormStage = keyof ParsedGuest | "declined" | "submit";

export function RSVPForm({
  guest,
  onSuccess,
  onClickBack,
}: {
  guest: ParsedGuest;
  onSuccess: (saidYes: boolean) => void;
  onClickBack: () => void;
}) {
  const { isPending, onSubmit, form, error } = useRSVP(guest, onSuccess);

  const [stage, setStage] = useState<FormStage>(() => {
    return "rsvp";
  });

  const rsvp = useWatch({
    control: form.control,
    name: "rsvp",
  });

  const currentDisplay = (() => {
    if (stage === "rsvp") {
      return (
        <AnimateIn duration={4}>
          <RSVP
            form={form}
            onSubmit={() => {
              if (rsvp) {
                setStage("dietaryRequirements");
                return;
              }
              setStage("submit");
            }}
            onClickBack={onClickBack}
          />
        </AnimateIn>
      );
    }

    if (stage === "dietaryRequirements") {
      return (
        <DietaryRequirements
          form={form}
          onSubmit={() => {
            if (guest.hasPlusOne) {
              setStage("plusOneRSVP");
              return;
            }

            setStage("submit");
          }}
          onClickBack={() => {
            setStage("rsvp");
          }}
        />
      );
    }

    if (stage === "plusOneRSVP") {
      return (
        <PlusOneRSVP
          form={form}
          onSubmit={() => {
            setStage("submit");
          }}
          onClickBack={() => {
            setStage("dietaryRequirements");
          }}
        />
      );
    }

    if (stage === "submit") {
      return (
        <Submit
          form={form}
          isLoading={isPending}
          errorMessage={error?.message ?? null}
          onSubmit={() => {
            const formData = form.getValues();
            onSubmit(formData);
          }}
          onClickBack={() => {
            if (!guest.rsvp) {
              setStage("rsvp");
              return;
            }

            if (guest.hasPlusOne) {
              setStage("plusOneRSVP");
              return;
            }

            setStage("dietaryRequirements");
          }}
        />
      );
    }
  })();

  return (
    <Form {...form}>
      <div className="mx-auto flex h-full w-full flex-col justify-center gap-4 p-16 text-xl">
        {currentDisplay}
      </div>
    </Form>
  );
}
