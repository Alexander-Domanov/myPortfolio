import React from "react";
import style from "./MyProjects.module.css"
import StyleContainer from "../common/styles/Container.module.css"
import {Project} from "./job/Project";

export const MyProjects = () => {
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${StyleContainer.container} ${style.myProjectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.myProjects}>
                    <Project title={'Название проекта'} description={'Описание проекта'}/>
                    <Project title={'Название проекта'} description={'Описание проекта'}/>
                </div>
            </div>
        </div>
    )
}