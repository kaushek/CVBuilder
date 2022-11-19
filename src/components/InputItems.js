import React from "react";

/*  This file containes the customized input field. 
    isTextArea = false :- renders the input field 
    isTextArea = true :- renders the textarea field*/
const InputItems = ({label, placeholder = '', name, onChange, type='text', isTextArea = false, className}) => {
    return(
        <div className={`row ${className}`}>
            <div className='input'>
                {!isTextArea ? <input onChange={onChange} placeholder={placeholder} name={name} type={type} />
                : <textarea onChange={onChange} placeholder={placeholder} name={name}></textarea>}

                <label>{label}</label>
            </div>
        </div>
    )
}

export default InputItems