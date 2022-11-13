import React from "react";
import {CgWebsite} from 'react-icons/cg';
import {BsTelephone} from 'react-icons/bs';
import { MdEmail } from "react-icons/md";

const Resume = ({imageSource, userObject}) => {
    return (
        <div className='resume-card'>
            <div className='resume-card-inner'>
                <div className='section section-1'>
                    <h3 className='full-name'>{userObject.firstName} {userObject.lastName}</h3>
                    <p className='job-title'>{userObject.jobTitle}</p>
                    <img className='pfp' alt={`${userObject.firstName}'s profile`} src={imageSource} />
                </div>
                <div className='section section-3'>
                    <h3>Summary</h3>
                    <p className='profile-info'>{userObject.summary}</p>
                </div>
                <div className='section section-2'>
                    <ul>
                        <li className='phoneNumber'><BsTelephone className='icon'/>{userObject.phoneNumber}</li>
                        <li className='email'><MdEmail className='icon'/>{userObject.email}</li>
                        {userObject.website ? <li className='website'><CgWebsite className='icon'/>{userObject.website}</li> : ''}
                    </ul>
                </div>
                <div className='section section-4 column'>
                    <h4 className='horizontal'>Skills</h4>
                    <p className='skill-title'>{userObject.skills}</p>
                </div>
                <div className='section section-5 column'>
                    <h4 className='horizontal'>Experience</h4>
                    <p>{userObject.experience}</p>
                </div>
                <div className='section section-6 column'>
                    <h4 className='horizontal'>Education</h4>
                    <p>{userObject.education}</p>
                </div>
                <div className='section section-7 column'>
                    <h4 className='horizontal'>Achievements</h4>
                    <p>{userObject.achievements}</p>
                </div>
            </div>
        </div>
    )
}

export default Resume