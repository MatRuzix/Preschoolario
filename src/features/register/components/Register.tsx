"use client";
import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

import { Input, Button } from "@/src/components";
import registerSchema from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/src/components";
import mailSender from "@/lib/handlers/mailSender";

import type { InferedRegisterSchema } from "@/lib/schemas/registerSchema";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferedRegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const t = useTranslations("errors");
  const router = useRouter();
  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);
  const [isTeacher, setIsTeacher] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<InferedRegisterSchema> = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch("/api/register", requestOptions);
      const body = await res.json();

      if (res.ok) {
        enqueueSnackbar(
          "Zarejestrowano pomyślnie! Proszę potwierdzić swój email ",
          { variant: "success" }
        );
        mailSender({
          email: data.email,
          operationType: "REGISTER",
          userId: body.user.id,
          isTeacher: data.isTeacher,
        });
        data.isTeacher && setIsTeacher(true);
        setIsModalOpened(true);
      }

      if (res.status === 409) {
        enqueueSnackbar("Użytkownik już istnieje!", { variant: "error" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      {isModalOpened && (
        <Modal
          title="Sukces!"
          firstParagraph="Na twoją strzynkę mailową został wysłany link aktywacyjny, potwiedź aby ukończyć rejestrację"
          buttonName="Przejdź do logowania"
          handleClick={() => {
            isTeacher
              ? router.push("/signIn/teacher")
              : router.push("/signIn/parent");
          }}
        />
      )}
      <div className="flex flex-col w-4/5 h-4/5 bg-schoolarioOrange rounded-lg justify-center items-center gap-3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex justify-between space-x-2">
            <Input
              {...register("firstName")}
              className="grow"
              size="small"
              type="text"
              label="Imię"
              placeholder="Imię"
              error={errors.firstName && t(errors.firstName?.message)}
            />
            <Input
              {...register("lastName")}
              className="grow"
              size="small"
              type="text"
              label="Nazwisko"
              placeholder="Nazwisko"
              error={errors.lastName && t(errors.lastName?.message)}
            />
          </div>
          <Input
            {...register("email")}
            size="small"
            type="text"
            label="E-mail"
            placeholder="E-mail"
            error={errors.email && t(errors.email?.message)}
          />
          <Input
            {...register("password")}
            size="small"
            type="password"
            label="Hasło"
            error={errors.password && t(errors.password?.message)}
          />
          <Input
            {...register("confirmPassword")}
            size="small"
            type="password"
            label="Potwierdź hasło"
            error={errors.confirmPassword && t(errors.confirmPassword?.message)}
          />
          <div className="flex space-x-3 relative">
            <p>Oświadczam, iż zapoznałem się z treścią Regulaminu.</p>
            <input
              id="acceptTerms"
              {...register("acceptTerms")}
              type="checkbox"
            />

            {errors.acceptTerms && (
              <p className="absolute mt-2 font-extralight text-xs text-red-500 bottom-errorSpacing">
                Przed rejestracją zapoznaj się z treścią regulaminu
              </p>
            )}
          </div>
          <div className="flex space-x-3">
            <p>Czy jesteś opiekunem przedszkolnym?</p>
            <input id="isTeacher" {...register("isTeacher")} type="checkbox" />
          </div>

          <Button
            name="Zarejestruj się"
            type="submit"
            variant="blue"
            className="mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Registration;
