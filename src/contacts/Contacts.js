import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <div className={style.inputContainer}>
                        <span className={style.spanElement}>Name*</span>
                        <input className={style.formInput} type="text" placeholder={"Name"}/>
                    </div>
                    <div className={style.inputContainer}>
                        <span className={style.spanElement}>E-mail*</span>
                        <input className={style.formInput} type="text" placeholder={"E-mail"}/>
                    </div>
                    <div className={style.blockTextArea}>
                        <span className={style.spanElement}>Message*</span>
                        <textarea className={style.formTextArea} placeholder={"Your message"}/>
                    </div>

                    <div className={style.blockButtonAndContacts}>
                        <button className={style.submitButton}>Send message</button>
                        <div className={style.containerPersonalInformation}>
                            <div>
                                <div className={style.socialIconContainer}>
                                    <FontAwesomeIcon className={style.socialIcon} icon={faPhoneVolume}/></div>
                                <span>+375 44 773 63 66</span>
                            </div>

                            <div>
                                <div className={style.socialIconContainer}>
                                    <FontAwesomeIcon className={style.socialIcon} icon={faEnvelope}/></div>
                                <span>lonegdd.druid@gmail.com</span>
                            </div>

                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}