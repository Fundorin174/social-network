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
import {NavLink} from 'react-router-dom';

const Title = (props) => {
    console.log(props)
    if (!props.currentProfile) {
        return <Preloader/>
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
                        {
                            props.currentProfile.contacts.facebook
                                ? <a href={props.currentProfile.contacts.facebook} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={facebookLogo} alt='facebook'/>
                                            <p>facebook</p>
                                        </div>
                                    </a>
                                : null
                        }
                        {
                            props.currentProfile.contacts.vk
                                ? <a href={props.currentProfile.contacts.vk} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={vkLogo} alt='vkLogo'/>
                                            <p>VK</p>
                                        </div>
                                    </a>
                                : null
                        }
                        {
                            props.currentProfile.contacts.instagram
                                ? <a href={props.currentProfile.contacts.instagram} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={instagramLogo} alt='instagramLogo'/>
                                            <p>instagramm</p>
                                        </div>
                                    </a>
                                : null
                        }
                        {
                            props.currentProfile.contacts.twitter
                                ? <a href={props.currentProfile.contacts.twitter} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={twitterLogo} alt='twitterLogo'/>
                                            <p>twitter</p>
                                        </div>
                                    </a>
                                : null
                        }
                        {
                            props.currentProfile.contacts.youtube
                                ? <a href={props.currentProfile.contacts.youtube} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={youtubeLogo} alt='youtubeLogo'/>
                                            <p>youtube</p>
                                        </div>
                                    </a>
                                : null
                        }
                        {
                            props.currentProfile.contacts.website
                                ? <a href={props.currentProfile.contacts.website} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={websiteLogo} alt='websiteLogo'/>
                                            <p>website</p>
                                        </div>
                                    </a>
                                : null
                        }
                        {
                            props.currentProfile.contacts.github
                                ? <a href={props.currentProfile.contacts.github} target='blank'>
                                        <div className={classes.contactLogo}>
                                            <img src={githubLogo} alt='githubLogo'/>
                                            <p>github</p>
                                        </div>
                                    </a>
                                : null
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;