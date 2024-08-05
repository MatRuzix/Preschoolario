import { z } from "zod";

const passwordRegExp = new RegExp(
  /^(?=.*\d)(?=.*[!@#$%^&*-])[a-zA-Z\d!@#$%^&*-]/
);

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "wrongEmail" })
    .min(1, { message: "noEmpty" }),
  password: z
    .string()
    .min(8, { message: "shortPassword" })
    .regex(passwordRegExp, { message: "wrongPasswordComposition" }),
});

export type InferedSignInSchema = z.infer<typeof signInSchema>;
export default signInSchema;
