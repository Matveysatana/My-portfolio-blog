import {instance} from "./instance";
import {FeedbackValuesType} from "../types/contact-form-type";

export const sendEmail = async (values: FeedbackValuesType) => {
  return instance.post('/send-email', values)
}