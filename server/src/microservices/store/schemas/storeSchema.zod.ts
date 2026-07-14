import { z } from 'zod';

export const storeSchema = z.object({
  storeName: z.string({
    required_error: 'Please provide a name for your store',
    invalid_type_error: 'firstName must be a string'
  }),
  storeDescription: z.string({
    required_error: 'Please add a description for your store',
    invalid_type_error: 'firstName must be a string'
  }),
  createdBy: z.string().optional(),
  _id: z.string().optional()
});

export type StoreSpecs = z.infer<typeof storeSchema>;

// export const profileParamsSchema = z.object({
//   id: z.string(),
// });

// export type ProfileParamsSpecs = z.infer<typeof profileParamsSchema>;
