import { z } from "zod";

export const registerSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "First Name is Required" }),

  lastname: z
    .string()
    .min(1, { message: "Last Name is Required" }),

  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email({ message: "This Email is Not Valid" }),

  phone: z
    .string()
    .min(1, { message: "Phone is Required" })
    .regex(/^01[0125][0-9]{8}$/, {
      message: "This Number is Not Valid",
    }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/[A-Z]/, {
      message: "Must contain at least 1 capital letter",
    })
    .regex(/[0-9]{3,}/, {
      message: "Must contain at least 3 numbers",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Must contain at least 1 special character",
    }),

  confirmpassword: z
    .string()
    .min(1, { message: "Confirm Password is Required" }),
})
.refine((data) => data.password === data.confirmpassword, {
  message: "Passwords do not match",
  path: ["confirmpassword"],
});