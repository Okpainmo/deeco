import { z } from 'zod';
export const userSchema = z.object({
    fullName: z.string({
        required_error: 'firstName is required',
        invalid_type_error: 'firstName must be a string'
    }),
    email: z.string({
        required_error: 'email is required',
        invalid_type_error: 'email must be a string'
    }),
    password: z.string({
        required_error: 'password is required',
        invalid_type_error: 'password must be a string'
    }),
    confirmPassword: z.string({
        required_error: 'confirmPassword is required',
        invalid_type_error: 'confirmPassword must be a string'
    }),
    _id: z.string().optional()
});
// export const profileParamsSchema = z.object({
//   id: z.string(),
// });
// export type ProfileParamsSpecs = z.infer<typeof profileParamsSchema>;
