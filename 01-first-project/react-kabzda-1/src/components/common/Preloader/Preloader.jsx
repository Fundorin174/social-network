import React from 'react';
import preloader from './../../../img/loadingIcon.svg'
import classes from './Preloader.module.css'

const Preloader = (props) => {
    return <> < img className = {
        classes.img
    }
    src = {
        preloader
    }
    alt = "Loading" /> </>
}

export default Preloader;