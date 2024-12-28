import React from "react";
import './AboutPages.css'
import SkillsCards from "components/SkillsCards/SkillsCards";
interface Igreeting {
    greet: string
}

function AboutPages(props: Igreeting) {

    const { greet } = props

    return (<>

        <div className="backgraund center">
            <nav className="about-menu center">
                <a href="#section-about-me" className="about-menu-link">О себе</a>
                <a href="#section-skills" className="about-menu-link">Навыки</a>
                <a href="#section-achivements" className="about-menu-link">Достижения</a>
                <a href="#section-hobbies" className="about-menu-link">Увлечения</a>
                <a href="#section-target" className="about-menu-link">Цели</a>
            </nav>
        </div>
        <div className="conteiner">
            <section id="section-about-me" className="section-about">
                <div className="conteiner">
                    <div className="greeting-page">
                        <div className="greeting">
                            <h3 className='greeting-title'>О себе</h3>
                            <p className='greeting-description'>Привет! Меня зовут Матвей, и это моя страница, где я рассказываю о себе, своих увлечениях и мечтах.</p>
                            <button className='greeting-button'>Узнать больше</button>
                        </div>

                        <div className="greeting">
                            <img src="" alt="фото автора" className="about-img" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="section-skills" className="section-about">
                <h2 className="section-title">Навыки</h2>
                <h3 className="section-description">Я постоянно совершенствую свои навыки, чтобы достичь большего</h3>
                <SkillsCards />
            </section>


            <section id="section-achivements" className="section-about">
                <h2 className="section-title">Образование и достижения</h2>
                <h3 className="section-description">Каждое достижение — это шаг к моим целям</h3>
            </section>


            <section id="section-hobbies" className="section-about">
                <h2 className="section-title">Увлечения</h2>
                <h3 className="section-description">Мои увлечения делают мою жизнь ярче и насыщеннее</h3>

                
            </section>


            <section id="section-target" className="section-about">
                <h2 className="section-title">Цели</h2>
                <h3 className="section-description">Моя главная цель — двигаться вперёд и расти</h3>

            </section>



        </div>
    </>
    )
};
export default AboutPages;