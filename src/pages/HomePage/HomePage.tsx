import { useNavigate } from 'react-router-dom';
import myPhoto from 'assets/images/myPhoto.png';
import './HomePage.css';

function HomePage() {

  const navigate = useNavigate();

  const handleNavigation = (path:string) => {
    window.scrollTo(0, 0); // Прокрутка страницы к началу
    navigate(path);
  };

  return (
    <div className="container">
      <div className="home-page greeting-page">
        <div className="greeting">
          <h1 className="greeting-title">Добро пожаловать на мой блог-портфолио!</h1>
          <p className="greeting-description">Привет! Меня зовут Сатановский Матвей, и я — начинающий веб-разработчик.
            Здесь вы найдёте мои проекты, статьи и мысли о программировании и разработке. Этот сайт — не просто
            портфолио, а место, где я делюсь своими идеями, учусь новому и вдохновляюсь.</p>
          <button className="greeting-button" onClick={() => navigate('/about')}>
            Узнать больше!
          </button>
        </div>

        <div className="greeting">
          <img className="greeting-img" src={myPhoto} alt="Фото Автора" />
        </div>
      </div>

      <div className="site-info-section">
        <h2 className="site-info-title">Структура сайта</h2>
        <p className="site-info-description">На этом сайте вы найдете различные разделы, которые помогут вам больше узнать обо мне, моих проектах и увлечениях. Ознакомьтесь с описанием ниже и нажмите на интересующий вас раздел для перехода.</p>
        <div className="site-info-cards">
          <div className="site-info-card" onClick={() => handleNavigation('/about')}>
            <h3>Обо мне</h3>
            <p>Узнайте больше о моём опыте, навыках, увлечениях и пути в веб-разработке. Здесь вы найдете информацию о моих профессиональных целях и достижениях.</p>
          </div>
          <div className="site-info-card" onClick={() => handleNavigation('/blog')}>
            <h3>Блог</h3>
            <p>В этом разделе я делюсь своими знаниями и мыслями о программировании, рассказываю о новых технологиях и делаю разбор интересных кейсов из разработки.</p>
          </div>
          <div className="site-info-card" onClick={() => handleNavigation('/contacts')}>
            <h3>Контакты</h3>
            <p>Если у вас есть вопросы, предложения или вы хотите обсудить сотрудничество, перейдите в раздел контактов. Я всегда открыт для общения!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
