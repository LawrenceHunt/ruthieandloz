import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";
import { type ParsedGuest, parsedGuestSchema } from "~/types/guests.types";

export function useRSVP(
  guest: ParsedGuest,
  onSuccess: (saidYes: boolean) => void,
) {
  const form = useForm<ParsedGuest>({
    resolver: zodResolver(parsedGuestSchema),
    defaultValues: {
      ...guest,
      dietaryRequirements: guest.dietaryRequirements ?? "none",
      plusOneDietaryRequirements: guest.hasPlusOne
        ? (guest.plusOneDietaryRequirements ?? "none")
        : "",
      plusOneRSVP: guest.plusOneRSVP ?? false,
      plusOneName: guest.plusOneName ?? "",
      email: guest.email ?? "",
      accommodation: guest.accommodation ?? "",
      message: guest.message ?? "",
    },
  });

  const { mutate, data, isPending, error, isSuccess } =
    api.guests.updateRSVP.useMutation({
      onSuccess: () => {
        onSuccess(true);
      },
    });

  const onSubmit = (data: ParsedGuest) => {
    data.hasRSVPd = true;

    // If the user has RSVP'd no, the plus one RSVP should also be false
    if (data.rsvp === false) {
      data.plusOneRSVP = false;
    }

    mutate(data);
  };

  return {
    form,
    onSubmit,
    isPending,
    data,
    isSuccess,
    error,
  };
}
