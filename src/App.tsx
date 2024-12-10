import './app.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Lauout/Layout';
import AboutPages from './pages/AboutPage/AboutPages';
import BlogPages from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPages from './pages/NotFoundPage/NotFoundPages';


const greeting = "Привет Матвей! это твой сайт"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path={'posts'} element={<BlogPages />}  ></Route>
          <Route path={'about'} element={<AboutPages greet={greeting} />}  ></Route>
          <Route path={'*'} element={<NotFoundPages />}  ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
