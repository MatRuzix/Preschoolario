"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import clsx from "clsx";
import { Spinner } from "flowbite-react";

import { Button } from "@/src/components";

const MailVerification = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const isTeacher = searchParams.get("isTeacher") == "true";
  console.log(token);
  console.log(isTeacher);
  const router = useRouter();
  const t = useTranslations("verification");
  const [isVerified, setIsVerified] = React.useState<boolean | undefined>(
    undefined
  );
  const [errorReason, setErrorReason] = React.useState<string>("");

  const postToken = async (token: string) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ token: token }),
      };
      const res = await fetch("/api/verifyEmail", requestOptions);
      if (res.status == 404) {
        setIsVerified(false);
        setErrorReason("notFound");
      }
      if (res.status == 408) {
        setIsVerified(false);
        setErrorReason("alreadyVerified");
      }
      if (res.status == 409) {
        setIsVerified(false);
        setErrorReason("expired");
      }
      if (res.status == 200) {
        setIsVerified(true);
      }
    } catch (error: any) {
      setIsVerified(false);
      throw new Error(error.message);
    }
  };

  React.useEffect(() => {
    if (token) {
      postToken(token);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div className="h-full w-full pt-20 flex justify-center items-center">
      <div className="flex flex-col p-4 bg-schoolarioOrange">
        <p className="flex">Aktywacja konta przebiegła</p>
        <span
          className={clsx("flex justify-center", {
            "text-green-500": isVerified,
            "text-red-500": isVerified == false,
          })}
        >
          {isVerified ? "pomyślnie!" : "niepomyślnie!"}
        </span>
        <span>Powód: {t(errorReason)}</span>
        <Button
          name="Przejdź do logowania"
          variant="blue"
          disabled={!isVerified && errorReason != "alreadyVerified"}
          onClick={() => {
            isTeacher
              ? router.push("/signIn/teacher")
              : router.push("/signIn/parent");
          }}
        />
      </div>
    </div>
  );
};

export default MailVerification;
