import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type GetUserFormData, getUserFormSchema } from "./GetUserForm";
import { api } from "~/trpc/react";

export function useGetUser() {
  const form = useForm<GetUserFormData>({
    resolver: zodResolver(getUserFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const {
    mutate,
    data,
    error,
    reset: resetGetGuest,
    isPending,
  } = api.guests.getGuest.useMutation();

  const onSubmit = () => {
    const formValues = form.getValues();
    mutate(formValues);
  };

  return {
    onSubmitForm: form.handleSubmit(onSubmit),
    refetchUser: onSubmit,
    resetGetGuest,
    form,
    data,
    error: error?.message ?? null,
    isLoading: isPending,
  };
}
