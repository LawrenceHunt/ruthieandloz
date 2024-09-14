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
    <div className="mx-auto flex h-full max-w-[600px] flex-col items-center justify-center gap-4">
      <div>
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
          "mx-auto flex h-[300px] w-[300px] flex-col items-center gap-4",
        )}
      >
        {guestIsLoading ? (
          <div className="flex w-full items-center justify-center">
            <LoadSpinner className="" />
          </div>
        ) : null}

        {!guest && !guestIsLoading ? (
          <GetUserForm
            form={guestForm}
            onSubmitForm={guestFormOnSubmit}
            error={guestFormError}
            className={guest ? "pointer-events-none opacity-0" : "opacity-100"}
          />
        ) : null}

        {guest?.hasRSVPd ? (
          <p className="py-8 text-xl text-slate-500">
            {Boolean(guest.rsvp) ? (
              <>
                Thank you for RSVP'ing!
                <br /> We can't wait to see you there.
              </>
            ) : (
              <>
                We're sorry to hear that you can't make it. <br />
                We'll miss you!
              </>
            )}
          </p>
        ) : null}

        {guest?.hasRSVPd ? (
          <>
            <Link
              href="/"
              className="hover: flex w-full items-center justify-center rounded-full border border-slate-500 py-2 text-sm font-medium hover:bg-slate-500 hover:text-white"
            >
              Back home
            </Link>

            <Button onClick={unsetHasRSVPd} isLoading={isLoadingUnsetHasRSVPd}>
              RSVP Again
            </Button>
          </>
        ) : null}
      </div>

      <div className="">
        <AnimatedLetter
          wrapperClassName={guest && !guest?.hasRSVPd ? "active" : ""}
        >
          {guest && !guest?.hasRSVPd ? (
            <RSVPForm
              guest={guest}
              onSuccess={() => {
                // refetch the user
                refetchUser();
              }}
              onClickBack={onClickBack}
            />
          ) : null}
        </AnimatedLetter>
      </div>
    </div>
  );
}
