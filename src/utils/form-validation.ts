import {FeedbackValuesType, FormikErrorType} from "../types/contact-form-type";

export const contactFormScheme = (values: FeedbackValuesType) => {
  const errors: FormikErrorType = {}

  if (values.name.length < 3) {
    errors.name = 'Too short name'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (values.message.length < 10) {
    errors.message = 'Too short message'
  }

  return errors
}