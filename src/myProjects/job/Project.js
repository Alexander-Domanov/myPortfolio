import React from "react";
import style from "./Project.module.scss"


export const Project = (props) => {
    return (
        <div className={style.myProject}>
            <div className={style.imgContainer} style={props.style}>
                <a href={''} className={style.button}>View</a>
            </div>
           <div className={style.projectInfo}>
               <h2 className={style.projectTitle}>{props.title}</h2>
               <span className={style.description}>{props.description}</span>
           </div>
        </div>
    )
}