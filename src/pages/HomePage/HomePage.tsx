import {useNavigate} from 'react-router-dom';
import {skills} from 'store/skils';
import {ISkills} from 'types/skils-type'
import './HomePage.css'
import {ImageDefiner} from "../../utils/image-definer";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="conteiner ">
      <div className="home-page greeting-page">
        <div className="greeting">
          <h1 className="greeting-title">Добро пожаловать на мой блог-портфолио!</h1>
          <p className="greeting-description">Привет! Меня зовут Матвей Сатановский, и я — начинающий веб-разработчик.
            Здесь вы найдёте мои проекты, статьи и мысли о программировании и разработке. Этот сайт — не просто
            портфолио, а место, где я делюсь своими идеями, учусь новому и вдохновляюсь.</p>
          <button className="greeting-button" onClick={() => navigate("/about")}>
            Узнать больше!
          </button>

        </div>

        <div className="greeting">
          <img className="my-photo-img" src="" alt="Фото Автора"/>
        </div>
      </div>

      <div className="skills-container">
        {skills.map((skill: ISkills) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-image">
              {ImageDefiner(skill.name)}
            </div>
            {/*<Image src={skill.image} alt={skill.name} className={'skill-image'} />*/}
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-progress">
              <div
                className="skill-fill"
                style={{width: `${skill.percentage}%`}}
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