import { useNavigate } from 'react-router-dom';
import './HomePage.css'


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
          <img className="my-photo-img" src="" alt="Фото Автора" />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;