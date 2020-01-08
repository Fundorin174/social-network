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

const Title = (props) => {
if (!props.currentProfile) {
    return <Preloader/>
}

let contactsRender = () => {
    let socialIcons = [],
        srcToIcons = [];
    for (let icon in props.currentProfile.contacts) {
        socialIcons.push(icon);
    }
    return (socialIcons.map((item, i) => {
        if (props.currentProfile.contacts[socialIcons[i]]) {
            srcToIcons.splice(0, 1, item + 'Logo');
            if (srcToIcons[0] == 'facebookLogo') {
                srcToIcons[0] = facebookLogo
            } else if (srcToIcons[0] == 'instagramLogo') {
                srcToIcons[0] = instagramLogo
            } else if (srcToIcons[0] == 'websiteLogo') {
                srcToIcons[0] = websiteLogo
            } else if (srcToIcons[0] == 'vkLogo') {
                srcToIcons[0] = vkLogo
            } else if (srcToIcons[0] == 'twitterLogo') {
                srcToIcons[0] = twitterLogo
            } else if (srcToIcons[0] == 'youtubeLogo') {
                srcToIcons[0] = youtubeLogo
            } else if (srcToIcons[0] == 'githubLogo') {
                srcToIcons[0] = githubLogo
            } else if (srcToIcons[0] == 'mainLinkLogo') {
                srcToIcons[0] = mainLinkLogo
            }
            return (
                <a
                    href={props
                        .currentProfile
                        .contacts[socialIcons[i]]}
                    target='blank'>
                    <div className={classes.contactLogo}>
                        <img src={srcToIcons[0]} alt={item}/>
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
            </div>
        </div>
    );
}

export default Title;