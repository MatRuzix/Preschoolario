"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { enqueueSnackbar } from "notistack";
import { useTranslations } from "next-intl";

import { Input, Button } from "@/src/components";
import signInSchema from "@/lib/schemas/logInSchema";
import type { InferedSignInSchema } from "@/lib/schemas/logInSchema";

const SignInAsParent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferedSignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
  });
  const t = useTranslations("errors");
  const router = useRouter();
  const onSubmit: SubmitHandler<InferedSignInSchema> = async (data) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    console.log(response?.error);
    if (response?.error === "UserNotFound") {
      enqueueSnackbar("Nie znaleziono użytkownika o tym emailu", {
        variant: "error",
      });

      return null;
    }

    if (response?.error === "UserNotAuthenticated") {
      enqueueSnackbar(
        "Konto nie zostało aktywowane, sprawdź proszę swoją skrzynkę mailową i spróbuj ponownie.",
        { variant: "error" }
      );

      return null;
    }

    if (response?.error === "InvalidPassword") {
      enqueueSnackbar("Hasło nieprawidłowe", { variant: "error" });

      return null;
    }
    enqueueSnackbar("Zalogowano pomyślnie, witaj!", { variant: "success" });
    router.push("/dashboard");
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col w-1/2 h-1/2 bg-schoolarioOrange rounded-lg justify-center items-center gap-3">
        <p className="text-2xl mb-6">Zaloguj się jako rodzic</p>
        <form
          className=" flex  flex-col w-full h-1/2 justify-center items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("email")}
            className="w-2/5"
            label="E-mail"
            placeholder="E-mail"
            type="text"
            error={errors.email && t(errors.email?.message)}
          />
          <Input
            {...register("password")}
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

export default SignInAsParent;
