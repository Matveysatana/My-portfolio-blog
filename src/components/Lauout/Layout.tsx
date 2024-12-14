import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="%PUBLIC_URL%/logo.webp" alt="logo" className="logo-image" />
                </div>

                <nav className="navigate">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/posts">Blog</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>

            </header>

            <section className="">
                <Outlet />
            </section>



            <footer>
                <div className="footer-navigation">
                    <div className="logo">
                        <img src="/public/logo.webp" alt="logo" className="logo-image" />
                    </div>

                    <nav className="navigate">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About Me</NavLink>
                        <NavLink to="/posts">Blog</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </nav>

                    <div className="footer-social">
                        <a href="https://vk.com/woydock" target="blank" className="socail-link">
                            <img src="/public/svg/vkontacte.svg" alt="Vk" />
                        </a>

                        <a href="#" target="blank" className="socail-link">
                            <img src="/public/svg/telegramm.svg" alt="Telegramm" />
                        </a>

                        <a href="#" target="blank" className="socail-link">
                            <img src="/public/svg/github.svg" alt="GitHub" />
                        </a>

                        <a href="#" target="blank" className="socail-link">
                            <img src="/public/logo.webp" alt="logo" />
                        </a>
                    </div>
                </div>

                <div className="copyrarte">2024 &copy; Матвей Сатановский</div>
            </footer>
        </>
    )
};

export default Layout;