import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './Layout.css';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Layout = () => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <section className="main">
        <Outlet />
      </section>

      <Footer />

    </>
  );
};

export default Layout;
