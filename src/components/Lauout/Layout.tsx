import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './Layout.css';
import VkIcn from 'assets/icons/svg/vkontacte.svg';
import TgIcn from 'assets/icons/svg/telegramm.svg';
import GhIcn from 'assets/icons/svg/github.svg';
import LogoIcn from 'assets/images/logo.webp';
import { Link } from "react-router-dom";

const Layout = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
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

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);


  return (
    <>

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={LogoIcn} alt="logo" className="logo-image" />
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className={`navigate ${isMenuOpen ? "open" : ""}`}>
            <NavLink
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              About Me
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Contacts
            </NavLink>

            <button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </nav>
        </div>
      </header>


      <section className="main">
        <Outlet />
      </section>


      <footer className="footer">
        <div className="footer-navigation">
          <div className="logo">
            <img src={LogoIcn} alt="logo" className="logo-image" />
          </div>

          <nav className="navigate">
            <NavLink
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              About Me
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Contacts
            </NavLink>
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
