export type FeedbackValuesType = {
  name: string
  email: string
  message: string
}
export type FormikErrorType = {
  name?: string
  email?: string
  message?: string
}
export type FeedbackStatusType = 'idle' | 'error' | 'succeeded'