import { z } from "zod";

const passwordRegExp = new RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/
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

export default signInSchema;
