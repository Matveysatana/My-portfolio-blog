import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="%PUBLIC_URL%/logo.webp" alt="logo" className="logo-image" />
                </div>

                <nav className="navigate padding-right">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/about">Обо мне</NavLink>
                    <NavLink to="/posts">Блог</NavLink>
                    <NavLink to="/portfolio">Портфолио</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                </nav>

            </header>

            <section className="center">
                <Outlet />
            </section>

            

            <footer>
                <div className="footer-navigation">
                    <div className="logo">
                        <img src="%PUBLIC_URL%/logo.webp" alt="logo" className="logo-image" />
                    </div>

                    <nav className="navigate">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/about">Обо мне</NavLink>
                        <NavLink to="/posts">Блог</NavLink>
                        <NavLink to="/portfolio">Портфолио</NavLink>
                        <NavLink to="/contacts">Контакты</NavLink>
                    </nav>

                    <div className="footer-social">
                        <img src="/src/assets/icons/svg/vkontacte.svg" alt="Vk" />
                        <img src="/src/assets/icons/svg/telegramm.svg" alt="Telegramm" />
                        <img src="/src/assets/icons/svg/github.svg" alt="GitHub" />
                    </div>
                </div>

                <div className="copyrarte">2024 &copy; Матвей Сатановский</div>
            </footer>
        </>
    )
};

export default Layout;