import React from "react";
import { useNavigate } from "react-router-dom";
import InputItems from './InputItems'
import {HiArrowRight} from 'react-icons/hi';
import 'animate.css'; import Resume from './Resume';

const PromptUser = ({handleChange, OnButtonClick, imageSource, userObject}) => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        alert(`WINDOWS DIMENSION : ${window.innerWidth}, ${window.innerHeight}`)
        navigate('/resume')
    }

    return(
        <>
        {OnButtonClick ? <Resume userObject = {userObject} imageSource = {imageSource} /> : <div className='prompt-container animate__animated animate__bounce'>
            <div className='page-header'>CV Builder</div>
            <div className='inputs'>
                <InputItems className = 'first-name' onChange = {handleChange} label = 'First Name' placeholder = 'Enter the first name' name='firstName' />
                <InputItems className = 'last-name' onChange = {handleChange} label = 'Last Name' placeholder = 'Enter the last name' name='lastName' />
                <InputItems className = 'email' onChange = {handleChange} label = 'Email' placeholder = 'Enter the email' name='email' />
                <InputItems className = 'phone' onChange = {handleChange} label = 'Phone' placeholder = 'Enter the phone no' name='phoneNumber' />
                <InputItems className = 'website' onChange = {handleChange} label = 'Website' placeholder = 'Enter the website' name='website' />
                <InputItems className = 'job-title' onChange = {handleChange} label = 'Current Job Title' placeholder = 'Enter the current job title' name='jobTitle' />

                <InputItems className = 'summary' onChange = {handleChange} label = 'Summary' placeholder = 'Enter the profile summary' name='summary' isTextArea={true} />
                <InputItems className = 'skills' onChange = {handleChange} label = 'Skill' placeholder = 'Enter the skills' name='skills' isTextArea={true} />
                <InputItems className = 'work-experience' onChange = {handleChange} label = 'Work Experience' placeholder = 'Enter the working experience' name='experience' isTextArea={true} />
                <InputItems className = 'education' onChange = {handleChange} label = 'Education' placeholder = 'Enter the education' name='education' isTextArea={true} />
                <InputItems className = 'achievements' onChange = {handleChange} label = 'Achievements' placeholder = 'Enter the achievements' name='achievements' isTextArea={true}/>
            
                <button className='generate-button' onClick={() => {
                    onButtonClick()
                }}>Generate Resume <HiArrowRight/></button>
            </div>
            
            </div>}
        </>
    )
}

export default PromptUser