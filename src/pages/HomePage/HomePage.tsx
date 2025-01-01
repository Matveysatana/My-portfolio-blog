import { useNavigate } from 'react-router-dom';
import myPhoto from 'assets/images/momentDevelop.jpg'
import './HomePage.css'


function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="conteiner ">
      <div className="home-page greeting-page">
        <div className="greeting">
          <h1 className="greeting-title">Добро пожаловать на мой блог-портфолио!</h1>
          <p className="greeting-description">Привет! Меня зовут  Сатановский Матвей, и я — начинающий веб-разработчик.
            Здесь вы найдёте мои проекты, статьи и мысли о программировании и разработке. Этот сайт — не просто
            портфолио, а место, где я делюсь своими идеями, учусь новому и вдохновляюсь.</p>
          <button className="greeting-button" onClick={() => navigate("/about")}>
            Узнать больше!
          </button>

        </div>

        <div className="greeting">
          <img className="greeting-img" src={myPhoto} alt="Фото Автора" />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;