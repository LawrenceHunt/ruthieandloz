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
    defaultValues: { ...guest, dietaryRequirements: "none" },
  });

  const { mutate, data, isPending, error, isSuccess } =
    api.guests.updateRSVP.useMutation({
      onSuccess: (data) => {
        onSuccess(true);
      },
    });

  const onSubmit = (data: ParsedGuest) => {
    data.hasRSVPd = true;

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
