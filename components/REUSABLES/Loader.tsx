import React from 'react'
import animationData from '../../animation/loader.json';
import Lottie from 'react-lottie';
import style from '../../styles/ReUsables.module.css';
    

const Loader = (): JSX.Element => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    return (
        <div className={style.animation__container} >
            <Lottie options={defaultOptions} height={150} width={150} />
        </div>
    )
}

export default Loader
