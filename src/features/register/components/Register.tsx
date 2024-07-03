"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { Input, Button } from "@/src/components";
import registerSchema from "@/lib/schemas/registerSchema";
import z from "zod";

type RegisterUser = z.infer<typeof registerSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();

  const onSubmit: SubmitHandler<RegisterUser> = async (data) => {};

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col w-4/5 h-4/5 bg-schoolarioOrange rounded-lg justify-center items-center gap-3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Input
            {...register("firstName")}
            type="text"
            label="Imię"
            placeholder="Imię"
          />
          <Input
            {...register("lastName")}
            type="text"
            label="Nazwisko"
            placeholder=""
          />
          <Input
            {...register("email")}
            type="text"
            label="E-mail"
            placeholder="Imię"
          />
          <Input
            {...register("password")}
            type="text"
            label="Hasło"
            placeholder="Imię"
          />
          <Input
            {...register("confirmPassword")}
            type="text"
            label="Potwierdź hasło"
            placeholder="Imię"
          />
          <label htmlFor="acceptTerms">
            Oświadczam, iż zapoznałem się z treścią Regulaminu.
          </label>
          <input
            id="acceptTerms"
            {...register("acceptTerms")}
            type="checkbox"
          />
          <label htmlFor="isTeacher">Czy jesteś opiekunem przedszkolnym?</label>
          <input id="isTeacher" {...register("isTeacher")} type="checkbox" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
