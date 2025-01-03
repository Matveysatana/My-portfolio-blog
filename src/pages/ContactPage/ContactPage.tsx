import "./Contact.css";
import contactPhoto from "assets/images/contactPhoto.jpg"
import UserIkon from "assets/icons/svg/user.svg"
import EmailIcon from "assets/icons/svg/email.svg"
import MessageIcon from "assets/icons/svg/message.svg"

const Contacts = () => {
    return (
        <div className="contact-container">
            {/* Вступительный текст и фото */}
            <div className="header-section">
                <div className="text-content">
                    <h1 className="title">Давайте останемся на связи!</h1>
                    <p className="description">
                        Это место, где вы можете оставить сообщение, поделиться своими идеями или задать вопрос. Также вы можете найти меня в социальных сетях.
                        Спасибо, что посетили мой сайт!
                    </p>
                </div>
                <div className="image-container">
                    <img src={contactPhoto} alt="Ваше фото" className="profile-image" />
                </div>
            </div>


            <h2 className="form-title">Напишите мне</h2>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="36369b66-0146-43a6-9829-addfa4fe78b7"></input>

                {/* Имя */}
                <div className="form-field">
                    <div className="form-field-wrraper">
                        <UserIkon className="icon" />
                        <label htmlFor="name" className="form-label">Имя</label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Введите свое имя"
                        required
                    />
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
                        className="form-input"
                        placeholder="Введите ваш email"
                        required
                    />
                </div>

                {/* Сообщение */}
                <div className="form-field">
                    <div className="form-field-wrraper">
                        <MessageIcon className="icon" />
                        <label htmlFor="message" className="form-label">Сообщение</label>
                    </div>
                    <textarea
                        name="message"
                        className="form-textarea"
                        placeholder="Введите ваше сообщение"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">
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
        </div>
    );
};

export default Contacts;
