import * as yup from 'yup';
import { validationPhrases } from '../phrases/validation.phrases';

export const registrationSchema = yup
  .object({
    firstName: yup
      .string()
      .required(validationPhrases.requiredField)
      .min(2, validationPhrases.nameMin),
    lastName: yup
      .string()
      .required(validationPhrases.requiredField)
      .min(2, validationPhrases.nameMin),
  })
  .required();
