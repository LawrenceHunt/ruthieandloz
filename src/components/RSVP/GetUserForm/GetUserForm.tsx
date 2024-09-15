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
  error,
  className,
}: {
  onSubmitForm: ReturnType<typeof useGetUser>["onSubmitForm"];
  form: ReturnType<typeof useGetUser>["form"];
  error: ReturnType<typeof useGetUser>["error"];
  className?: string;
}) {
  const { control } = form;

  return (
    <Form {...form}>
      <form onSubmit={onSubmitForm} className={className}>
        <p className="text-slate-500">Thanks for getting back to us!</p>

        <h1 className="mt-2 text-3xl text-slate-700">What&apos;s your name?</h1>

        <FormField
          control={control}
          name="firstName"
          render={({ field }) => {
            return (
              <FormItem>
                <div className="mt-4">
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

        <div>
          {error ? (
            <div className="mt-4 text-lg text-red-500">{error}</div>
          ) : null}
        </div>
      </form>
    </Form>
  );
}
