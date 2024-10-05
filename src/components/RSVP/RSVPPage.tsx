"use client";

import { GetUserForm } from "./GetUserForm/GetUserForm";
import { cn } from "~/lib/cn.util";
import { RSVPForm } from "./RSVPForm/RSVPForm";
import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { useGetUser } from "./GetUserForm/useGetUser";
import { api } from "~/trpc/react";
import { LoadSpinner } from "../LoadSpinner";
import Link from "next/link";
import { AnimateIn } from "../AnimateIn";

function AnimatedLetter({
  children,
  wrapperClassName,
  className,
}: {
  children?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("letter-wrapper", wrapperClassName)}>
      <div className="lid one" />
      <div className="lid two" />
      <div className="envelope" />

      <div className={cn("letter", className)}>{children}</div>
    </div>
  );
}

export function RSVPPage() {
  const router = useRouter();

  const {
    data: guestData,
    onSubmitForm: guestFormOnSubmit,
    refetchUser,
    error: guestFormError,
    resetGetGuest,
    form: guestForm,
    isLoading: guestIsLoading,
  } = useGetUser();

  const guest = guestData?.guest ?? null;

  const { mutate, isPending: isLoadingUnsetHasRSVPd } =
    api.guests.updateRSVP.useMutation({ onSuccess: refetchUser });

  const unsetHasRSVPd = () => {
    if (!guest) return;
    mutate({ ...guest, hasRSVPd: false });
  };

  const onClickBack = () => {
    resetGetGuest();
  };

  return (
    <div className="mx-auto flex h-full max-w-[300px] flex-col items-center justify-center gap-4">
      <div className="flex w-full items-center justify-between pt-2">
        <Link href="/" className="underline">
          Home
        </Link>

        <button
          disabled={!guestForm.formState.isDirty}
          onClick={() => {
            guestForm.reset();
            resetGetGuest();
            router.refresh();
          }}
          className="cursor-pointer rounded-full border border-red-700 px-4 py-1 text-red-700 hover:border-red-300 hover:bg-red-300 hover:text-black disabled:cursor-default disabled:border-slate-200 disabled:bg-slate-200 disabled:text-slate-500"
        >
          Reset
        </button>
      </div>

      <h1 className="self-center text-3xl text-slate-500">- RSVP -</h1>

      <div
        className={cn(
          "flex w-full flex-col items-center gap-4",
          "min-h-[300px]",
        )}
      >
        {guestIsLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <LoadSpinner className="" />
          </div>
        ) : null}

        {!guest && !guestIsLoading ? (
          <GetUserForm
            form={guestForm}
            onSubmitForm={guestFormOnSubmit}
            className={guest ? "pointer-events-none opacity-0" : "opacity-100"}
          />
        ) : null}

        {guestFormError ? (
          <AnimateIn>
            <p className="flex h-full w-full items-center justify-center text-base text-pink1">
              {guestFormError}
            </p>
          </AnimateIn>
        ) : null}

        {guest?.hasRSVPd ? (
          <p className="py-8 text-xl text-slate-500">
            {Boolean(guest.rsvp) ? (
              <AnimateIn>
                Thank you for RSVP&apos;ing!
                <br /> We can&apos;t wait to see you there.
              </AnimateIn>
            ) : (
              <AnimateIn>
                We&apos;re sorry to hear that you can&apos;t make it. <br />
                We&apos;ll miss you!
              </AnimateIn>
            )}
          </p>
        ) : null}

        {guest?.hasRSVPd ? (
          <AnimateIn>
            <Link
              href="/"
              className="hover: flex w-full items-center justify-center rounded-full border border-slate-500 py-2 text-sm font-medium hover:bg-slate-500 hover:text-white"
            >
              Back home
            </Link>

            <Button
              onClick={unsetHasRSVPd}
              isLoading={isLoadingUnsetHasRSVPd}
              className="mt-4"
            >
              RSVP Again
            </Button>
          </AnimateIn>
        ) : null}
      </div>

      <AnimatedLetter
        wrapperClassName={guest && !guest?.hasRSVPd ? "active" : ""}
      >
        {guest && !guest?.hasRSVPd ? (
          <RSVPForm
            guest={guest}
            onSuccess={refetchUser}
            onClickBack={onClickBack}
          />
        ) : null}
      </AnimatedLetter>
    </div>
  );
}
