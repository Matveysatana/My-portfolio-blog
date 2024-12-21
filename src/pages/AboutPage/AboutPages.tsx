import React from "react";
import './AboutPages.css'


interface Igreeting {
    greet: string
}

function AboutPages(props: Igreeting) {

    const { greet } = props

    return (<>

        <div className="backgraund center">
            <nav className="about-menu center">
                <a href="#about" className="about-menu-link">О себе</a>
                <a href="#skills" className="about-menu-link">Навыки</a>
                <a href="#education" className="about-menu-link">Достижения</a>
                <a href="#hobby" className="about-menu-link">Увлечения</a>
                <a href="#target" className="about-menu-link">Цели</a>
            </nav>
        </div>
        <div className="conteiner">


            <section id="about" className="section-about">
                <h2>Обо мне</h2>
                <p>Привет! Я Матвей, начинающий разработчик, увлечённый созданием современных веб-приложений.</p>
                <p>Моя цель — постоянно развиваться в области программирования и создавать проекты, которые приносят пользу людям.</p>
            </section>


            <section id="skills" className="section-about">
                <h2>Навыки</h2>
                <ul>
                    <li>HTML & CSS — уверенное владение для создания сайтов</li>
                    <li>JavaScript & React — основы и продвинутое использование</li>
                    <li>TypeScript — типизация данных</li>
                </ul>
            </section>


            <section id="education" className="section-about">
                <h2>Образование и достижения</h2>
                <p>Ученик 9 класса. Участвую в олимпиадах по информатике и создании проектов для школы.</p>
            </section>


            <section id="hobby" className="section-about">
                <h2>Увлечения</h2>
                <p>В свободное время изучаю новые технологии, играю в шахматы и читаю книги на тему саморазвития.</p>
            </section>


            <section id="target" className="section-about">
                <h2>Цели</h2>
                <p>В ближайшее время планирую создать полноценное портфолио и получить первый коммерческий опыт.</p>
            </section>



        </div>
    </>
    )
};
export default AboutPages;