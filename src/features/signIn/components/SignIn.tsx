import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input, Button } from "@/src/components";
import signInSchema from "@/lib/schemas/logInSchema";

type SignInUser = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUser>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
  });

  return <div></div>;
};

export default SignIn;
