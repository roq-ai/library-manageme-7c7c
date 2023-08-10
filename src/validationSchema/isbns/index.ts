import * as yup from 'yup';

export const isbnValidationSchema = yup.object().shape({
  number: yup.string().nullable(),
});
