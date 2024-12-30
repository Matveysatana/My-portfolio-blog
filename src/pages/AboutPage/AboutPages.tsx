import React from "react";
import './AboutPages.css'
import myPhoto from "assets/images/me.jpg"
import SkillsCards from "components/SkillsCards/SkillsCards";
import project_1 from "assets/images/my-projects/project_1.png";
import project_2 from "assets/images/my-projects/project_2.png";
import project_3 from "assets/images/my-projects/project_3.png";
import project_4 from "assets/images/my-projects/project_4.png";






function AboutPages() {

    

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
            <div className="conteiner">
                <div className="greeting-page">
                    <div className="greeting">
                        <h3 className='greeting-title'>Добро пожаловать на мою страницу!</h3>
                        <p className='greeting-description'>
                            Привет! Меня зовут Матвей, и я рад, что ты заглянул сюда.
                            Это мой маленький уголок в интернете, где я делюсь своими мыслями, увлечениями и мечтами.
                            Здесь ты сможешь узнать, что вдохновляет меня, чем я занимаюсь и к чему стремлюсь.
                            Надеюсь, моя история будет интересной и, возможно, даже вдохновляющей для тебя!
                        </p>
                        <button className='greeting-button'>Узнать больше</button>
                    </div>

                    <div className="greeting">
                        <img src="assets/images/me.jpg" alt="фото автора" className="about-img" />
                    </div>
                </div>
            </div>


            <section id="section-about-me" className="section-about">
                <h2 className="section-title">О себе</h2>
                <h3 className="section-description">Я — начинающий разработчик и автор этого блога</h3>
                <div className="about-content">
                    <img src={myPhoto} alt="Моя фотография" className="about-image" />
                    <div className="about-text">
                        <p>
                            Привет! Меня зовут Матвей, и мне 14 лет. Я учусь в 9 классе и активно занимаюсь самообразованием в сфере IT.
                            Мой дядя, который работает в этой области, вдохновил меня начать изучать программирование, и с февраля 2023 года я погрузился в мир кода.
                            Сейчас я сосредоточен на фронтенд-разработке и изучаю TypeScript и React.
                        </p>
                        <ul className="about-facts">
                            <li>📍 Живу в Феодосии, Россия</li>
                            <li>🎂 Дата рождения: 26.01.2010</li>
                            <li>🎓 Образование: Самоучка с помощью наставника</li>
                            <li>💻 Основные технологии: JavaScript, HTML, CSS, React</li>
                            <li>🎯 Мечтаю создать свой стартап</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section-skills" className="section-about">
                <h2 className="section-title">Навыки</h2>
                <h3 className="section-description">Я постоянно совершенствую свои навыки, чтобы достичь большего</h3>
                <SkillsCards />
            </section>


            <section id="section-achievements" className="section-about">
                <h2 className="section-title">Образование и достижения</h2>
                <h3 className="section-description">Мой путь в IT: от первых шагов до текущих проектов</h3>

                <div className="education-timeline">
                    <div className="timeline-step">
                        <h4 className="timeline-heading">Начало пути</h4>
                        <p>
                            В феврале 2023 года, вдохновившись желанием создавать что-то своё, я начал программировать на Python прямо с телефона.
                            Это позволило мне понять, как работают базовые конструкции программирования.
                        </p>
                        <p>
                            Через несколько недель я обратился за советом к своему дяде, и он порекомендовал изучить JavaScript. Это стало моим
                            первым шагом в мир веб-разработки и дало мне базу для изучения более сложных технологий.
                        </p>
                    </div>
                    <div className="timeline-step">
                        <h4 className="timeline-heading">Первые проекты</h4>
                        <p>
                            Знакомство с HTML и CSS помогло мне создавать простые веб-страницы, а изучение JavaScript дало возможность
                            добавлять интерактивность. Я пробовал различные технологии и инструменты, такие как Git, Vue, Angular, и многое другое.
                        </p>
                        <p>
                            Хотя я не углублялся в каждую технологию, я понимал их концепции и выбирал те, которые помогли мне двигаться к цели.
                        </p>
                    </div>
                    <div className="timeline-step">
                        <h4 className="timeline-heading">Современные технологии</h4>
                        <p>
                            Сегодня мой основной стек — это React и TypeScript. Эти технологии я использую для разработки своих текущих
                            проектов, таких как личный блог. Каждый новый проект помогает мне углублять знания и разрабатывать более сложные
                            структуры кода.
                        </p>
                        <p>
                            С каждым шагом я продолжаю учиться, экспериментировать и стремлюсь стать опытным разработчиком, способным создавать
                            качественные и масштабируемые приложения.
                        </p>
                    </div>
                </div>

                <div className="achievements-section">
                    <h4 className="achievements-heading">Мои достижения</h4>
                    <div className="projects-container">
                        <a href="https://matveysatana.github.io/My-portfolio-blog/"  className="project-card">
                            <img src="/src/assets/images/my-projects/project_1" alt="Личный блог на React" />
                            <p>Личный блог на React — мой первый серьёзный проект с использованием современных технологий.</p>
                        </a>
                        <a href="https://matveysatana.github.io/portfolio/" className="project-card">
                            <img src={project_2} alt="Интернет-магазин мебели" />
                            <p>Интернет-магазин мебели — учебный проект, где я применял HTML, CSS и базовые знания JS.</p>
                        </a>
                        <a href="https://matveysatana.github.io/cookies/" className="project-card">
                            <img src={project_3} alt="Интернет-магазин печенья" />
                            <p>Интернет-магазин печенья — проект с использованием Angular.</p>
                        </a>
                        <a href=" https://matveysatana.github.io/BusinessCard/" className="project-card">
                            <img src={project_4} alt="Мой старый блог" />
                            <p>Первая версия моего блога — важный этап в моём обучении.</p>
                        </a>
                    </div>
                </div>

            </section>


            <section id="section-hobbies" className="section-about">
                <h2 className="section-title">Увлечения</h2>
                <h3 className="section-description">Мои увлечения делают мою жизнь ярче и насыщеннее</h3>
                <div className="hobbies-grid">
                    <div className="hobby-card">
                        <i className="fas fa-music"></i>
                        <h4>Музыка</h4>
                        <p>Играю на гитаре и учусь писать свои треки.</p>
                    </div>
                    <div className="hobby-card">
                        <i className="fas fa-book"></i>
                        <h4>Чтение</h4>
                        <p>Люблю научную фантастику и книги по саморазвитию.</p>
                    </div>
                    <div className="hobby-card">
                        <i className="fas fa-camera"></i>
                        <h4>Фотография</h4>
                        <p>Снимаю природу и городские пейзажи.</p>
                    </div>
                </div>
            </section>


            <section id="section-target" className="section-about">
                <h2 className="section-title">Цели</h2>
                <h3 className="section-description">Моя главная цель — двигаться вперёд и расти</h3>
                <div className="goals-list">
                    <div className="goal-item">
                        <h4>Профессиональный рост</h4>
                        <p>Стать senior-разработчиком в течение следующих 3 лет.</p>
                    </div>
                    <div className="goal-item">
                        <h4>Личный проект</h4>
                        <p>Создать приложение, которое поможет людям учиться новому.</p>
                    </div>
                    <div className="goal-item">
                        <h4>Путешествия</h4>
                        <p>Посетить 10 новых стран в ближайшие 5 лет.</p>
                    </div>
                </div>
            </section>



        </div >
    </>
    )
};
export default AboutPages;