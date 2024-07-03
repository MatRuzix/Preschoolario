"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { enqueueSnackbar } from "notistack";

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

  const router = useRouter();

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
    router.push("/dashboard");
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col w-1/2 h-1/2 bg-schoolarioOrange rounded-lg justify-center items-center gap-3">
        <p className="text-2xl mb-6">Zaloguj się jako opiekun</p>
        <form
          className=" flex  flex-col w-full h-1/2 justify-center items-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register}
            className="w-1/3"
            label="E-mail"
            placeholder="E-mail"
            type="text"
          />
          <Input
            {...register}
            className="w-1/3"
            label="Hasło"
            placeholder="Hasło"
            type="password"
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
