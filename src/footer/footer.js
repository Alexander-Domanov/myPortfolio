import React from "react";
import style from "./footer.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTelegram,faFacebook, faVk, faLinkedin} from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer} `}>
                <h2>ALexander Domanov</h2>
                <div className={style.footer}>
                    <div className={style.socialIconContainer}>
                        <FontAwesomeIcon className={style.socialIcon} icon={faTelegram} />
                    </div>
                    <div className={style.socialIconContainer}>
                        <FontAwesomeIcon className={style.socialIcon} icon={faFacebook} />
                    </div>
                    <div className={style.socialIconContainer}>
                        <FontAwesomeIcon className={style.socialIcon} icon={faLinkedin} />
                    </div>
                    <div className={style.socialIconContainer}>
                        <FontAwesomeIcon className={style.socialIcon} icon={faVk} />
                    </div>
                </div>
                <span>© 2023. All rights reserved.</span>
            </div>
        </div>
    )
}