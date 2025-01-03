import './app.css';
import './appMedia.css'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Lauout/Layout';
import AboutPages from './pages/AboutPage/AboutPages';
import BlogPages from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPages from './pages/NotFoundPage/NotFoundPages';
import BlogDetails from 'pages/BlogDetailsPage/BlogDetailsPage';

//  мой код KZZ1HZ36WVEBL5AAR8D4GRAC


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path={'blog'} element={<BlogPages />} ></Route>
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path={'about'} element={<AboutPages/>}  ></Route>
          <Route path={'contacts'} element={<ContactPage />}  ></Route>
          <Route path={'*'} element={<NotFoundPages />}  ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
