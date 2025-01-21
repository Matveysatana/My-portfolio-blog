import {instance} from "./instance";
import {FeedbackValuesType} from "../types/contact-form-type";
import {AxiosResponse} from "axios";

export const sendEmail = async (values: FeedbackValuesType) => {
  return instance.post<'', AxiosResponse<any>, FeedbackValuesType>('/send-email', values)
}