import React from "react";
import style from "./Project.module.css"


export const Project = (props) => {
    return (
        <div className={style.myProject}>
            <div className={style.imgContainer}>
                <a href='' className={style.button}>View</a>
            </div>
            <h4>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}