import { z } from 'zod';

export const productSchema = z.object({
  productName: z.string({
    required_error: 'Please add a name for your product',
    invalid_type_error: 'firstName must be a string'
  }),
  productDescription: z.string({
    required_error: 'Please add a description for your product',
    invalid_type_error: 'firstName must be a string'
  }),
  productPriceInUSD: z.number({
    required_error: 'Please add a description for your product',
    invalid_type_error: 'firstName must be a string'
  }),
  createdBy: z.string().optional(),
  _id: z.string().optional()
});

export type ProductSpecs = z.infer<typeof productSchema>;

// export const profileParamsSchema = z.object({
//   id: z.string(),
// });

// export type ProfileParamsSpecs = z.infer<typeof profileParamsSchema>;
