import React from 'react';
import './app.css';
import {Routes,Route, Link} from "react-router-dom";
import Homepage from "./pages/homepage";
import Aboutpages from "./pages/aboutpages";
import Blogpages from "./pages/blogpages";
import Notfoundpages from "./pages/notfoundpages";

function App() {
  return (
    <div className="App">
      <header>
          <Link to="/">Домой</Link>
        <Link to="/posts">Блог</Link>
        <Link to="/about">Обо мне</Link>
      </header>
      <div className='route'>
        React-router
      </div>
        <Routes>
            <Route path={'/'} element={<Homepage />}  ></Route>
            <Route path={'/posts'} element={<Blogpages />}  ></Route>
            <Route path={'/about'} element={<Aboutpages />}  ></Route>
            <Route path={'*'} element={<Notfoundpages />}  ></Route>
        </Routes>
    </div>
  );
}

export default App;
