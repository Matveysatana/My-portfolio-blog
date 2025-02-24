import VkIcn from 'assets/icons/svg/vkontacte.svg';
import TgIcn from 'assets/icons/svg/telegramm.svg';
import GhIcn from 'assets/icons/svg/github.svg';
import { NavLink } from 'react-router-dom';
import LogoIcn from 'assets/images/logo.webp';
import { Link } from 'react-router-dom';
import "./Footer.css"


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-navigation">
                    <div className="logo">
                        <Link to="/"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <img src={LogoIcn} alt="logo" className="logo-image" />
                        </Link>
                    </div>

                    <nav className="navigate">
                        <NavLink
                            to="/"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            Обо мне
                        </NavLink>
                        <NavLink
                            to="/blog"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            Блог
                        </NavLink>
                        <NavLink
                            to="/contacts"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            Контакты
                        </NavLink>
                    </nav>

                    <div className="footer-social">
                        <a href="https://vk.com/woydock" target="blank" className="social-link">
                            <VkIcn className="social-icon" />
                        </a>
                        <a href="https://t.me/Woydok" target="blank" className="social-link">
                            <TgIcn className="social-icon" />
                        </a>
                        <a href="https://github.com/Matveysatana" target="blank" className="social-link">
                            <GhIcn className="social-icon" />
                        </a>
                    </div>
                </div>

                <div className="copyrarte">2024 &copy; Матвей Сатановский</div>
            </footer>
        </>
    )
}

export default Footer;