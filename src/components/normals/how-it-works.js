import React from 'react'

import styles from './how-it-works.module.css'



export default ({ imgSrc = '', children, isImageRight = false }) => {
    const left = <div className="row">
        <div className={`col-sm-6`}>
            <img className={`${styles.img} mx-auto d-block`} src={imgSrc} alt="how-it-works" />
        </div>
        <div className={`col-sm-6`}>
            {children}
        </div>
    </div>

    const right = <div className="row">
        <div className={`col-sm-6`}>
            {children}
        </div>
        <div className={`col-sm-6`}>
            <img className={`${styles.img} mx-auto d-block`} src={imgSrc} alt="how-it-works" />
        </div>
    </div>
    return isImageRight ? right : left
}