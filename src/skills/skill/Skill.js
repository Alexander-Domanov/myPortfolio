import React from "react";
import style from "./Skill.module.css"


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h2 className={style.projectTitle}>{props.title}</h2>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}