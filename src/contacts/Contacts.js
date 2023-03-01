import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"
export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3>Contacts</h3>
                   <form className={style.form}>
                       <input className={style.formInput} type="text"/>
                       <input className={style.formInput} type="text"/>
                       <textarea className={style.formTextArea}/>
                       <button className={style.button}>Send</button>
                   </form>
            </div>
        </div>
    )
}