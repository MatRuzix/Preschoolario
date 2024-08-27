"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { enqueueSnackbar } from "notistack";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { Input, Button } from "@/src/components";
import signInSchema from "@/lib/schemas/logInSchema";

type SignInUser = z.infer<typeof signInSchema>;

const SignInAsTeacher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUser>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
  });
  const t = useTranslations("errors");
  const { status } = useSession();

  const onSubmit: SubmitHandler<SignInUser> = async (data) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (response?.error === "UserNotFound") {
      enqueueSnackbar("Nie znaleziono użytkownika o tym emailu", {
        variant: "error",
      });

      return null;
    }

    if (response?.error === "InvalidPassword") {
      enqueueSnackbar("Hasło nieprawidłowe", { variant: "error" });

      return null;
    }
    enqueueSnackbar("Zalogowano pomyślnie, witaj!", { variant: "success" });
  };

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col w-1/2 h-1/2 bg-schoolarioOrange rounded-lg justify-center items-center gap-3">
        <p className="text-2xl mb-6">Zaloguj się jako opiekun</p>
        <form
          className=" flex  flex-col w-full h-1/2 justify-center items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register}
            className="w-2/5"
            label="E-mail"
            placeholder="E-mail"
            type="text"
            error={errors.email && t(errors.email?.message)}
          />
          <Input
            {...register}
            className="w-2/5"
            label="Hasło"
            placeholder="Hasło"
            type="password"
            error={errors.password && t(errors.password?.message)}
          />
          <Button
            name="Zaloguj się"
            type="submit"
            className="bg-blue-400 mt-4"
            fontColor="white"
          />
        </form>
      </div>
    </div>
  );
};

export default SignInAsTeacher;
