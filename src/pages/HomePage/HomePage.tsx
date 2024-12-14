import React from "react";
import './HomePage.css'



function HomePage() {
    return (
        <div className="conteiner ">
            <div className="home-page">
                <div className="greering">
                    <h1 className="greering-title">Добро пожаловать на мой блог-портфолио!</h1>
                    <p className="greering-description">Привет! Меня зовут Матвей Сатановский, и я — начинающий веб-разработчик. Здесь вы найдёте мои проекты, статьи и мысли о программировании и разработке. Этот сайт — не просто портфолио, а место, где я делюсь своими идеями, учусь новому и вдохновляюсь.</p>
                    <button className="greering-button">Узнать больше!</button>
                </div>

                <div className="my-photo">
                    <img className="my-photo-img" src="" alt="Фото Автора" />
                </div>
            </div>
        </div>
    )
}
export default HomePage;