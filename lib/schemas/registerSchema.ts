import { z } from "zod";

const passwordRegExp = new RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/
);

const registerSchema = z
  .object({
    email: z
      .string()
      .email({ message: "wrongEmail" })
      .min(1, { message: "noEmpty" }),
    password: z
      .string()
      .min(8, { message: "shortPassword" })
      .regex(passwordRegExp, { message: "wrongPasswordComposition" }),
    confirmPassword: z.string().min(1, { message: "noEmpty" }),
    firstName: z.string().min(1, { message: "noEmpty" }),
    lastName: z.string().min(1, { message: "noEmpty" }),
    acceptTerms: z.boolean(),
    isTeacher: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsNotMatch",
    path: ["confirmPassword"],
  })
  .refine((data) => data.acceptTerms === true, {
    message: "policyNotAccepted",
    path: ["acceptTerms"],
  });

export default registerSchema;
