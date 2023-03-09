import React from "react";
import style from "./MyProjects.module.scss"
import StyleContainer from "../common/styles/Container.module.css"
import {Project} from "./job/Project";
import {Title} from "../common/components/title/Title";
import socialNetworkImage from "../assets/image/social-network.jpg"
import todoListImage from "../assets/image/To_Do_List.jpg"

export const MyProjects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoListImage})`,
    };
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${StyleContainer.container} ${style.myProjectsContainer}`}>
             <Title title={"My Projects"} titleSpan={"Projects"}/>
                <div className={style.myProjects}>
                    <Project style={socialNetwork} title={'Social network'} description={'My social network'}/>
                    <Project style={todoList} title={'To do list'} description={'My to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listMy to do listv'}/>
                </div>
            </div>
        </div>
    )
}