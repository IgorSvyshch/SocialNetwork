import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../images/default-ava.png'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return  <Preloader/>
    }

    return (
        <div className={style.profileInfo}>
            <div>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt='avatar'/> 
                </div>
                <div className={style.fullName}> 
                    {props.profile.fullName}
                </div>
                <div className={style.status}>
                    {props.status}
                </div>
                <div className={style.aboutMe}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div> 
)}
export default ProfileInfo;