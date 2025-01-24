import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcn from "assets/images/logo.webp";
import "./Header.css";

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <header className={`header ${isScrolled ? "scrolled" : ""} ${isDarkMode ? "dark" : ""}`}>
            <div className="header-container">
                <div className="logo">
                    <Link to="/"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}>
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
    );
};

export default Header;
