import React from "react";
import { useNavigate } from "react-router-dom";
import InputItems from './InputItems'
import {HiArrowRight} from 'react-icons/hi';
import 'animate.css'; import Resume from './Resume';
import Axios from 'axios'

const PromptUser = ({handleChange, OnButtonClick, imageSource, userObject}) => {
    const navigate = useNavigate();


    const onButtonClick = () => {
        navigate('/resume')
    }

    const submitCV = () => {
        Axios.post('http://localhost:3001/api/saveCVDetails', {
            FirstName: typeof userObject.firstName == 'undefined' ? alert('First name cannot be empty') : userObject.firstName, 
            LastName: typeof userObject.lastName == 'undefined' ? alert('Last name cannot be empty') : userObject.lastName, 
            Email: typeof userObject.email == 'undefined' ? alert('Email cannot be empty') : userObject.email, 
            Phone: typeof userObject.phoneNumber == 'undefined' ? alert('Phone number cannot be empty') : userObject.phoneNumber,
            WebSite: typeof userObject.website == 'undefined' ? alert('Website cannot be empty') : userObject.website,
            JobTitle: typeof userObject.jobTitle == 'undefined' ? alert('Current job title cannot be empty') : userObject.jobTitle, 
            Summary: typeof userObject.summary == 'undefined' ? alert('Summary cannot be empty') : userObject.summary, 
            Skills: typeof userObject.skills == 'undefined' ? alert('Skills cannot be empty') : userObject.skills, 
            WorkExperience: typeof userObject.experience == 'undefined' ? alert('Experience cannot be empty') : userObject.experience, 
            Education: typeof userObject.education == 'undefined' ? alert('Education cannot be empty') : userObject.education, 
            Achievements: typeof userObject.achievements == 'undefined' ? alert('Achievements cannot be empty') : userObject.achievements
        }).then((res) => {
            console.log(res)
            alert("Successfully Inserted!");
        });
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

                <button className="save-button" onClick={submitCV}> Save CV Data <HiArrowRight/></button>
            </div>
            
            </div>}
        </>
    )
}

export default PromptUser