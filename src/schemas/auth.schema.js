import {z} from "zod"

export const registerSchema = z.object({
    username: z.string({required_error: "Username is required"}),
    name: z.string({required_error: "Name is required"}),
    password: z.string({required_error: "Password is required"}).min(6,{
        message: "La contraseña es demasiado corta"
    }),
    role: z.string({required_error: "Role is required"}),
    reserve: z.string({required_error: "Reserve is required"}),
});

export const loginSchema = z.object({
    username: z.string({
        required_error: "Username is required"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6,{
        message: "La contraseña es demasiado corta"
    })
});