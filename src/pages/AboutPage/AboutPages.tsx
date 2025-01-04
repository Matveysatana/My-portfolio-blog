import React, { useRef } from "react";
import './AboutPages.css'
import myPhoto from "assets/images/me.jpg"
import aboutMe from "assets/images/aboutMe.jpg"
import SkillsCards from "components/SkillsCards/SkillsCards";
import project_1 from "assets/images/my-projects/project_1.png";
import project_2 from "assets/images/my-projects/project_2.png";
import project_3 from "assets/images/my-projects/project_3.png";
import project_4 from "assets/images/my-projects/project_4.png";
import hobby_1 from "assets/images/hobbies/prog.hobby.png"
import hobby_2 from "assets/images/hobbies/voleyball.hobby.png"
import hobby_3 from "assets/images/hobbies/inest.hobby.png"
import goal_1 from "assets/images/goals/senior.goal.png"
import goal_2 from "assets/images/goals/personApp.goal.png"
import goal_3 from "assets/images/goals/travel.goal.png"
import goal_4 from "assets/images/goals/health.goal.png"
import goal_5 from "assets/images/goals/education.goal.png"
import goal_6 from "assets/images/goals/cherst.goal.png"

import { Link, useNavigate } from "react-router-dom";






function AboutPages() {

    const navigate = useNavigate();

    const sectionAboutMe = useRef(null);
    const sectionSkills = useRef(null);
    const sectionAchivements = useRef(null);
    const sectionHobbies = useRef(null);
    const sectionTarget = useRef(null);


    const scrollToSection = (ref: any) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (<>

        <div className="backgraund center">
            <nav className="about-menu center">
                <a href="#section-about-me" className="about-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection(sectionAboutMe); }}>О себе</a>
                <a href="#section-skills" className="about-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection(sectionSkills); }}>Навыки</a>
                <a href="#section-achivements" className="about-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection(sectionAchivements); }}>Достижения</a>
                <a href="#section-hobbies" className="about-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection(sectionHobbies); }}>Увлечения</a>
                <a href="#section-target" className="about-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection(sectionTarget); }}>Цели</a>
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
                        <button onClick={(e) => { e.preventDefault(); scrollToSection(sectionAboutMe); }} className='greeting-button'>Узнать больше</button>
                    </div>

                    <div className="greeting">
                        <img src={aboutMe} alt="фото автора" className="greeting-img" />
                    </div>
                </div>
            </div>


            <section ref={sectionAboutMe} id="section-about-me" className="section-about">
                <h2 className="section-title">О себе</h2>
                <h3 className="section-description">Я — начинающий разработчик и автор этого блога</h3>
                <div className="about-content">
                    <img src={myPhoto} alt="Моя фотография" className="about-image" />
                    <div className="about-text">
                        <p>
                            Мне 14 лет, я учусь в 9 классе и активно занимаюсь самообразованием в сфере IT.
                            Мой дядя, который работает в этой области, вдохновил меня начать изучать программирование, и с февраля 2023 года я погрузился в мир кода.
                            Сейчас я сосредоточен на фронтенд-разработке и изучаю TypeScript и React.
                        </p>
                        <ul className="about-facts">
                            <li>📍 Живу в Феодосии, Крым</li>
                            <li>🎂 Дата рождения: 26.01.2010</li>
                            <li>🎓 Образование: Самоучка с помощью наставника</li>
                            <li>💻 Основные технологии: JavaScript, HTML, CSS, React</li>
                            <li>🎯 Мечтаю создать свой стартап</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section ref={sectionSkills} id="section-skills" className="section-about">
                <h2 className="section-title">Навыки</h2>
                <h3 className="section-description">Я постоянно совершенствую свои навыки, чтобы достичь большего</h3>
                <SkillsCards />
            </section>


            <section ref={sectionAchivements} id="section-achievements" className="section-about">
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
                        <a href="https://matveysatana.github.io/My-portfolio-blog/" target="_blank"
                            rel="noopener noreferrer" className="project-card">
                            <img src={project_1} alt="Личный блог на React" />
                            <p>Личный блог на React — мой первый серьёзный проект с использованием современных технологий.</p>
                        </a>
                        <a href="https://matveysatana.github.io/portfolio/" target="_blank"
                            rel="noopener noreferrer" className="project-card">
                            <img src={project_2} alt="Интернет-магазин мебели" />
                            <p>Интернет-магазин мебели — учебный проект, где я применял HTML, CSS и базовые знания JS.</p>
                        </a>
                        <a href="https://matveysatana.github.io/cookies/" target="_blank"
                            rel="noopener noreferrer" className="project-card">
                            <img src={project_3} alt="Интернет-магазин печенья" />
                            <p>Интернет-магазин печенья — проект с использованием Angular.</p>
                        </a>
                        <a href=" https://matveysatana.github.io/BusinessCard/" target="_blank"
                            rel="noopener noreferrer" className="project-card">
                            <img src={project_4} alt="Мой старый блог" />
                            <p>Первая версия моего блога — важный этап в моём обучении.</p>
                        </a>
                    </div>
                </div>

            </section>


            <section ref={sectionHobbies} id="section-hobbies" className="section-about">
                <h2 className="section-title">Увлечения</h2>
                <h3 className="section-description">Мои увлечения делают мою жизнь ярче и насыщеннее</h3>
                <div className="hobbies-grid">

                    <div className="hobby-card" onClick={() => navigate('/blog/1')}>
                        <img src={hobby_1} alt="Программирование" className="hobby-image" />
                        <h4 className="hobby-title">Программирование</h4>
                        <p className="hobby-text">Программирование — это не просто моя работа, но и страсть. Я люблю создавать проекты на React,
                            экспериментировать с новыми технологиями и решать сложные задачи. В свободное время я изучаю
                            новые фреймворки и библиотеки, чтобы быть в курсе последних тенденций в мире разработки.
                            Программирование для меня — это возможность воплощать идеи в жизнь и постоянно учиться чему-то новому.</p>
                    </div>

                    <div className="hobby-card" onClick={() => navigate('/blog/25')}>
                        <img src={hobby_2} alt="Волейбол" className="hobby-image" />
                        <h4 className="hobby-title">Волейбол</h4>
                        <p className="hobby-text"> Волейбол — это моё любимое спортивное увлечение. Я играю в волейбол с друзьями каждую неделю,
                            и это отличный способ не только поддерживать физическую форму, но и проводить время в кругу
                            единомышленников. Мне нравится динамика игры, командный дух и адреналин, который я испытываю
                            на площадке. Волейбол помогает мне отвлечься от работы и зарядиться энергией.</p>
                    </div>

                    <div className="hobby-card" onClick={() => navigate('/blog/19')}>
                        <img src={hobby_3} alt="Инвестирование" className="hobby-image" />
                        <h4 className="hobby-title">Инвестирование</h4>
                        <p className="hobby-text"> Инвестирование — это увлечение, которое помогает мне думать о будущем. Я изучаю фондовый рынок,
                            анализирую компании и инвестирую в акции. Для меня это не только способ приумножить капитал,
                            но и возможность глубже понять, как работает мировая экономика. Я постоянно читаю книги и статьи
                            на тему инвестиций, чтобы принимать более обоснованные решения. Инвестирование учит меня
                            дисциплине и терпению.</p>
                    </div>
                </div>

                <div className="more-button-container">
                    <h4 className="more-text">Хочешь узнать поподробнее? переходи в блог</h4>
                    <Link
                        to="/blog"
                        className="more-button"
                        onClick={() => window.scrollTo(0, 0)} // Прокручиваем страницу вверх
                    >
                        Узнать больше
                    </Link>
                </div>
            </section>


            <section ref={sectionTarget} id="section-target" className="section-about">
                <h2 className="section-title">Цели</h2>
                <h3 className="section-description">Моя главная цель — двигаться вперёд и расти</h3>
                <div className="goals-list">
                    <div className="goal-item">
                        <img src={goal_1} alt="Профессиональный рост" className="goal-image" />
                        <div className="goal-content">
                            <h4>Профессиональный рост</h4>
                            <p>Моя цель — стать senior-разработчиком в течение следующих 3 лет. Для этого я планирую углублять свои знания в современных технологиях, таких как React, Node.js и облачные решения, а также активно участвовать в сложных проектах, чтобы развивать навыки архитектуры и управления командой. Я также намерен регулярно проходить курсы и сертификации, чтобы оставаться в курсе последних тенденций в IT-индустрии.</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <img src={goal_2} alt="Личный проект" className="goal-image" />
                        <div className="goal-content">
                            <h4>Личный проект</h4>
                            <p>Я хочу создать приложение, которое поможет людям учиться новому, будь то изучение языков, программирование или другие навыки. Это приложение будет включать интерактивные уроки, персонализированные рекомендации и систему отслеживания прогресса. Я верю, что такой проект не только поможет другим, но и позволит мне применить свои знания на практике, а также развить навыки проектного менеджмента и маркетинга.</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <img src={goal_3} alt="Путешествия" className="goal-image" />
                        <div className="goal-content">
                            <h4>Путешествия</h4>
                            <p>В ближайшие 5 лет я планирую посетить 10 новых стран, чтобы расширить свой кругозор, познакомиться с разными культурами и получить вдохновение для новых идей. Я хочу не просто быть туристом, а погружаться в местную жизнь, изучать традиции и общаться с людьми. Путешествия для меня — это не только отдых, но и возможность личностного роста и получения нового опыта.</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <img src={goal_4} alt="Здоровый образ жизни" className="goal-image" />
                        <div className="goal-content">
                            <h4>Здоровый образ жизни</h4>
                            <p>Я ставлю перед собой цель вести здоровый образ жизни, включая регулярные физические нагрузки, правильное питание и заботу о ментальном здоровье. Я планирую заниматься спортом не менее 3 раз в неделю, практиковать медитацию для снижения стресса и следить за своим рационом, чтобы поддерживать высокий уровень энергии и продуктивности.</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <img src={goal_5} alt="Обучение и саморазвитие" className="goal-image" />
                        <div className="goal-content">
                            <h4>Обучение и саморазвитие</h4>
                            <p>Я намерен постоянно учиться и развиваться, читая книги, проходя онлайн-курсы и посещая конференции. Моя цель — изучать не только технические навыки, но и soft skills, такие как коммуникация, лидерство и тайм-менеджмент. Я верю, что непрерывное обучение — это ключ к успеху в любой сфере жизни.</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <img src={goal_6} alt="Социальная активность" className="goal-image" />
                        <div className="goal-content">
                            <h4>Социальная активность</h4>
                            <p>Я хочу активно участвовать в социальных и благотворительных проектах, помогая тем, кто в этом нуждается. Это может быть волонтёрство, организация мероприятий или поддержка образовательных инициатив. Я считаю, что важно не только достигать личных целей, но и вносить вклад в общество, делая мир лучше.</p>
                        </div>
                    </div>
                </div>
            </section>



        </div >
    </>
    )
};
export default AboutPages;