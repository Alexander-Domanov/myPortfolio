import React from "react";
import style from "./Skills.module.css"
import StyleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${StyleContainer.container} ${style.skillsContainer}`}>
               <Title title={"My Skills"} titleSpan={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
                    <Skill title={'CSS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}/>
                    <Skill title={'REACT'} description={'It has survived not only five centuries'}/>
                </div>
            </div>
        </div>
    )
}