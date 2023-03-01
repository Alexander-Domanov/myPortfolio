import React from "react";
import style from "./footer.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer} `}>
                <h3>ALexander Domanov</h3>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>copyright 2023</span>
            </div>
        </div>
    )
}