import React from 'react';
import classes from './Title.module.css';
import topImg from './../../../img/topProfileImg.jpg';
import Preloader from '../../common/Preloader/Preloader';
import Avatar from './../../../img/avatar.png';
import facebookLogo from './../../../img/socialLogo/Facebook.png';
import websiteLogo from './../../../img/socialLogo/website.svg';
import vkLogo from './../../../img/socialLogo/vk.svg';
import twitterLogo from './../../../img/socialLogo/twitter.png';
import instagramLogo from './../../../img/socialLogo/instagram.svg';
import youtubeLogo from './../../../img/socialLogo/yuotube.png';
import githubLogo from './../../../img/socialLogo/github.png';
import mainLinkLogo from './../../../img/socialLogo/mainLink.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Title = (props) => {
if (!props.currentProfile) {
    return <Preloader/>
}

let contactsRender = () => {
    let socialIcons = [],
        srcToIcons;
    for (let icon in props.currentProfile.contacts) {
        socialIcons.push(icon);
    }
    return (socialIcons.map((item, i) => {
        if (props.currentProfile.contacts[socialIcons[i]]) {
            srcToIcons = (item + 'Logo');
            if (srcToIcons === 'facebookLogo') {
                srcToIcons = facebookLogo
            } else if (srcToIcons === 'instagramLogo') {
                srcToIcons = instagramLogo
            } else if (srcToIcons === 'websiteLogo') {
                srcToIcons = websiteLogo
            } else if (srcToIcons === 'vkLogo') {
                srcToIcons = vkLogo
            } else if (srcToIcons === 'twitterLogo') {
                srcToIcons = twitterLogo
            } else if (srcToIcons === 'youtubeLogo') {
                srcToIcons = youtubeLogo
            } else if (srcToIcons === 'githubLogo') {
                srcToIcons = githubLogo
            } else if (srcToIcons === 'mainLinkLogo') {
                srcToIcons = mainLinkLogo
            }
            return (
                <a key={i}
                    href={props
                        .currentProfile
                        .contacts[socialIcons[i]]}
                    target='blank'>
                    <div className={classes.contactLogo}>
                        <img src={srcToIcons} alt={item}/>
                        <p>{item}</p>
                    </div>
                </a>
            )
        } else {
            return null
        }
    }))

}
    return (
        <div className={classes.content}>
            <div className={classes.topimg}>
                <img src={topImg} alt={"top-img"}/>
            </div>
            <div className={classes.avadescription}>
                <div className={classes.avatar}>
                    <img
                        src={props.currentProfile.photos.small != null
                            ? props.currentProfile.photos.small
                            : Avatar}
                        alt={"my-ava"}/>
                </div>
                <div className={classes.description}>
                    <h3>{props.currentProfile.fullName}</h3>
                    <ul>
                        <li>Обо мне: {props.currentProfile.aboutMe}</li>
                        {
                            props.currentProfile.lookingForAJob
                                ? <li>Статус: Ищу работу</li>
                                : <li>Статус: Есть работа</li>
                        }
                        {
                            (
                                props.currentProfile.lookingForAJob && props.currentProfile.lookingForAJobDescription != null
                            )
                                ? <li>Описание вакансии: {props.currentProfile.lookingForAJobDescription}</li>
                                : null
                        }
                        <li>Мои контакты:</li>
                    </ul>
                    <div className={classes.contacts}>
                        {contactsRender()}
                    </div>
                </div>
                <div className = {classes.status}>
                        <ProfileStatusWithHooks autorizedUserId = {props.autorizedUserId} userID = {props.currentProfile.userId} currentStatus = {props.currentStatus} setStatus = {props.setStatus}/>
                </div>
            </div>
        </div>
    );
}

export default Title;