import { number, string, object } from 'yup';

export const reviewSchema = object({
  rating: number()
    .min(1, 'Please rate this product')
    .max(5, 'Please rate this product')
    .required('Please rate this product'),
  comment: string()
    .max(300)
    .required('Please leave your feedback (max. 300 characters)'),
});
