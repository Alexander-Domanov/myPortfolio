import React from "react";
import style from "./Skill.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skill = (props) => {
    return (
        <div className={style.skill}>
           <div className={style.iconBox}>
               <FontAwesomeIcon icon={props.FontAwesomeIcon} className={style.icon} />
           </div>

            <h2 className={style.projectTitle}>{props.title}</h2>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}