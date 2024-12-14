import {NavLink, Outlet} from "react-router-dom";
import './Layout.css'
import VkIcn from 'assets/images/svg/vkontacte.svg';
import TgIcn from 'assets/images/svg/telegramm.svg'
import GhIcn from 'assets/images/svg/github.svg'
import LogoIcn from 'assets/images/logo.webp'


const Layout = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={LogoIcn} alt="logo" className="logo-image"/>
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
        <Outlet/>
      </section>


      <footer>
        <div className="footer-navigation">
          <div className="logo">
            <img src={LogoIcn} alt="logo" className="logo-image"/>
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
              {/*<img src="/public/svg/vkontacte.svg" alt="Vk" />*/}
              {/*<img src={VkIcn} alt="Vk"/>*/}
              <VkIcn />
            </a>

            <a href="#" target="blank" className="socail-link">
              {/*<img src={TgIcn} alt="Telegramm"/>*/}
              <TgIcn />
            </a>

            <a href="#" target="blank" className="socail-link">
              {/*<img src={GhIcn} alt="GitHub"/>*/}
              <GhIcn />
            </a>

            <a href="#" target="blank" className="socail-link">
              <img src={LogoIcn} alt="logo" />
              {/*<LogoIcn />*/}
            </a>
          </div>
        </div>

        <div className="copyrarte">2024 &copy; Матвей Сатановский</div>
      </footer>
    </>
  )
};

export default Layout;