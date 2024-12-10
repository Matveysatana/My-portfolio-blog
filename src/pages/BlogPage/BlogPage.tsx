import React from "react";
import { useNavigate } from "react-router-dom";



function BlogPages () {

    const navigation = useNavigate();
    const goBack = () => navigation(-1);
    return (
        
        <div className="blog ">
            <button onClick={goBack}> Вернуться назад</button>
            <p>Сайт посвящен моему блогу!</p>
        </div>
    )
}
export default BlogPages;