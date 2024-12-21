import { useNavigate } from 'react-router-dom';
import { skills } from 'store/skils';
import { ISkils } from 'types/skils-type'
import HtmlIcn from 'assets/images/svg/html5.svg'
import MyPhoto from 'assets/images/logo.webp'
import './HomePage.css'


const ImageRender = (skill: string) => {
    switch (skill) {
        case "HTML":
            return HtmlIcn
        default:
            return
    }
}

function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="conteiner ">
            <div className="home-page">
                <div className="greering">
                    <h1 className="greering-title">Добро пожаловать на мой блог-портфолио!</h1>
                    <p className="greering-description">Привет! Меня зовут Матвей Сатановский, и я — начинающий веб-разработчик. Здесь вы найдёте мои проекты, статьи и мысли о программировании и разработке. Этот сайт — не просто портфолио, а место, где я делюсь своими идеями, учусь новому и вдохновляюсь.</p>
                    <button className="greering-button" onClick={() => navigate("/about")}>
                        Узнать больше!
                    </button>

                </div>

                <div className="my-photo">
                    <img className="my-photo-img" src={MyPhoto} alt="Фото Автора" />
                </div>
            </div>

            <div className="skills-container">
                {skills.map((skill: ISkils) => (
                    <div key={skill.id} className="skill-card">
                        <img src={ImageRender(skill.name)} alt={skill.name} className="skill-image" />
                        <h3 className="skill-name">{skill.name}</h3>
                        <p className="skill-description">{skill.description}</p>
                        <div className="skill-progress">
                            <div
                                className="skill-fill"
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                        </div>
                        <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                ))}
            </div>




        </div>

    )
}
export default HomePage;