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
        <AnimateIn duration={0.5} delay={0.5} key={"rsvp"}>
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
        <AnimateIn duration={0.5} delay={0} key="dietaryRequirements">
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
        </AnimateIn>
      );
    }

    if (stage === "plusOneRSVP") {
      return (
        <AnimateIn duration={0.5} delay={0} key="plusOneRSVP">
          <PlusOneRSVP
            form={form}
            onSubmit={() => {
              setStage("submit");
            }}
            onClickBack={() => {
              setStage("dietaryRequirements");
            }}
          />
        </AnimateIn>
      );
    }

    if (stage === "submit") {
      return (
        <AnimateIn duration={0.5} delay={0} key="submit">
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
        </AnimateIn>
      );
    }
  })();

  return (
    <Form {...form}>
      <div className="h-full w-full gap-4 px-4 py-4 text-xl lg:px-16 lg:py-8">
        {currentDisplay}
      </div>
    </Form>
  );
}
