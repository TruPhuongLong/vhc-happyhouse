import React from 'react';

import styles from './image-show.module.css'

//styles.img equivalence .img-fluid

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-4 ${styles.container}`}>
                    <img className={`mx-auto d-block ${styles.img}`} src="images/anton-exterior.jpg" />
                    <div className={styles.centered}>
                        <p>SILICON VALLEY</p>
                        <p>starting at $800 / month</p>
                    </div>

                </div>
                <div className={`col-md-4 ${styles.container}`}>
                    <img className={`mx-auto d-block ${styles.img}`} src="images/capitol_650-building.png" />
                    <div className={styles.centered}>
                        <p>SEATTLE</p>
                        <p>starting at $800 / month</p>
                    </div>
                </div>
                <div className={`col-md-4 ${styles.container}`}>
                    <img className={`mx-auto d-block ${styles.img}`} src="images/foster_city-exterior.jpg" />
                    <div className={styles.centered}>
                        <p>LOS ANGERLES</p>
                        <p>starting at $800 / month</p>
                    </div>
                </div>
            </div>
        </div>
    )
}