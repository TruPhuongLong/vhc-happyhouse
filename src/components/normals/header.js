import React from 'react';

import styles from './header.module.css'

export default () => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.logo} src="images/Logo-main.svg" />
            </div>
            <div className={styles.menu}>
                <a href="#">LOCATION</a>
                <a href="#">PROMOTIONS</a>
                <a href="#">SING IN</a>
            </div>

        </div>
    )
}