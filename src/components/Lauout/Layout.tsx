import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './Layout.css';
import VkIcn from 'assets/icons/svg/vkontacte.svg';
import TgIcn from 'assets/icons/svg/telegramm.svg';
import GhIcn from 'assets/icons/svg/github.svg';
import LogoIcn from 'assets/images/logo.webp';
import Image from "../Image/Image";

const Layout = () => {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Image src={LogoIcn} alt="logo" className="logo-image" />
        </div>

        <nav className="navigate">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>

      <section className="">
        <Outlet />
      </section>

      <footer className="footer">
        <div className="footer-navigation">
          <div className="logo">
            <img src={LogoIcn} alt="logo" className="logo-image" />
          </div>

          <nav className="navigate">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>

          <div className="footer-social">
            <a href="https://vk.com/woydock" target="blank" className="social-link">
              <VkIcn />
            </a>
            <a href="https://t.me/Woydok" target="blank" className="social-link">
              <TgIcn />
            </a>
            <a href="https://github.com/Matveysatana" target="blank" className="social-link">
              <GhIcn />
            </a>
          </div>
        </div>

        <div className="copyrarte">2024 &copy; Матвей Сатановский</div>
      </footer>
    </>
  );
};

export default Layout;
