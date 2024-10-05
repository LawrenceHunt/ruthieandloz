import { z } from "zod";
import { Form, FormField, FormItem } from "../../Form";
import { type useGetUser } from "./useGetUser";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";

export const getUserFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export type GetUserFormData = z.infer<typeof getUserFormSchema>;

export function GetUserForm({
  onSubmitForm,
  form,
  className,
}: {
  onSubmitForm: ReturnType<typeof useGetUser>["onSubmitForm"];
  form: ReturnType<typeof useGetUser>["form"];
  className?: string;
}) {
  const { control } = form;

  return (
    <Form {...form}>
      <form onSubmit={onSubmitForm} className={className}>
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => {
            return (
              <FormItem>
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-xl text-slate-500"
                  >
                    First name
                  </label>

                  <Input id="first-name" {...field} />
                </div>
              </FormItem>
            );
          }}
        />

        <FormField
          control={control}
          name="lastName"
          render={({ field }) => {
            return (
              <FormItem>
                <div className="mt-4">
                  <label htmlFor="last-name" className="text-xl text-slate-500">
                    Last name
                  </label>

                  <Input id="last-name" {...field} />
                </div>
              </FormItem>
            );
          }}
        />

        <div className="mt-6 flex w-full justify-end">
          <Button role="submit">Confirm</Button>
        </div>
      </form>
    </Form>
  );
}
