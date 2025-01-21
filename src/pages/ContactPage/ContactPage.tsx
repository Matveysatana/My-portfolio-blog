import UserIkon from "assets/icons/svg/user.svg"
import EmailIcon from "assets/icons/svg/email.svg"
import MessageIcon from "assets/icons/svg/message.svg"
import contactPhoto from "assets/images/contactPhoto.jpg"
import { useFormik } from "formik";
import { contactFormScheme } from "../../utils/form-validation";
import { FeedbackValuesType } from "../../types/contact-form-type";
import { sendEmail } from "../../api/smtp-action";
import React, { SyntheticEvent, useState } from "react";
import { Button, IconButton, Snackbar, SnackbarCloseReason } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
import { AxiosError } from "axios";

const Contacts = () => {
  // const [feedbackStatus, setFeedbackStatus] = useState<FeedbackStatusType>('idle')
  // const [isSending, setIsSending] = useState(true)

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: contactFormScheme,
    onSubmit: async (values: FeedbackValuesType) => await onSubmitHandler(values),
  })

  const onSubmitHandler = async (values: FeedbackValuesType) => {
    console.log(values)

    try {
      const response = await sendEmail(values)

      console.log(response)

      if (response.status === 200) {
        setOpen(true)
        setMessage(response.data)
        formik.resetForm()

        const timer = setTimeout(() => {
          setOpen(false)
          setMessage('')
          clearTimeout(timer)
        }, 6000)
      }


    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      console.error(e)
      setMessage(err.message)
    }
  }

  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Ok!
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        {/*<CloseIcon fontSize="small"/>*/}
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="contact-container">
      {/* Вступительный текст и фото */}
      <div className="header-section">
        <div className="text-content">
          <h1 className="title">Давайте останемся на связи!</h1>
          <p className="description">
            Это место, где вы можете оставить сообщение, поделиться своими идеями или задать вопрос. Также вы можете
            найти меня в социальных сетях.
            Спасибо, что посетили мой сайт!
          </p>
        </div>
        <div className="image-container">
          <img src={contactPhoto} alt="Ваше фото" className="profile-image" />
        </div>
      </div>


      <h2 className="form-title">Напишите мне</h2>
      <form className="contact-form" onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <div className="form-field-wrraper">
            <UserIkon className="icon" />
            <label htmlFor="name" className="form-label">Имя</label>
          </div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={`form-input ${formik.errors.name ? 'form-input--error' : ''}`}
            placeholder="Введите свое имя"
            required
          />
          {formik.errors.name && <label htmlFor="name" className="error-label">{formik.errors.name}</label>}
        </div>

        {/* Email */}
        <div className="form-field">
          <div className="form-field-wrraper">
            <EmailIcon className="icon" />
            <label htmlFor="email" className="form-label">Email</label>
          </div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={`form-input ${formik.errors.email ? 'form-input--error' : ''}`}
            placeholder="Введите ваш email"
            required
          />
          {formik.errors.email && <label htmlFor="email" className="error-label">{formik.errors.email}</label>}
        </div>

        {/* Сообщение */}
        <div className="form-field">
          <div className="form-field-wrraper">
            <MessageIcon className="icon" />
            <label htmlFor="message" className="form-label">Сообщение</label>
          </div>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className={`form-textarea ${formik.errors.message ? 'form-input--error' : ''}`}
            placeholder="Введите ваше сообщение"
            required
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          ></textarea>
          {formik.errors.message && <label htmlFor="message" className="error-label">{formik.errors.message}</label>}
        </div>

        <button
          type="submit"
          className={`submit-button ${Object.keys(formik.errors).length ? 'submit-button--error' : ''}`}
          disabled={Object.keys(formik.errors).length > 0}
        >
          Отправить
        </button>
      </form>

      {/* Социальные ссылки */}
      <div className="social-section">
        <p>Или свяжитесь со мной в соцсетях:</p>
        <a href="https://github.com/Matveysatana" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="social-link">
          VK
        </a>
        <a href="https://t.me/Woydok" target="_blank" rel="noopener noreferrer" className="social-link">
          Telegram
        </a>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
};

export default Contacts;
