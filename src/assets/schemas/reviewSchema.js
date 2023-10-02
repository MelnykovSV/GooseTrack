import { number, string, object } from 'yup';

export const reviewSchema = object({
  rating: number().min(1).max(5).required(),
  comment: string().max(300).required(),
});
