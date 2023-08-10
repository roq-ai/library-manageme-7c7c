import * as yup from 'yup';

export const bookValidationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  library_id: yup.string().nullable(),
  isbn_id: yup.string().nullable().required(),
});
