import React from "react";
import './AboutPages.css'


interface Igreeting {
    greet: string
}

function AboutPages(props: Igreeting) {

    const {greet} = props

    return (
        <div className="about">
            <p> Это мой сайт и я его учусь разрабатывать</p>
            <p>{greet}</p>
        </div>
    )
};
export default AboutPages;