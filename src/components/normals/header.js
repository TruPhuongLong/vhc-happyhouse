import React from 'react';

import styles from './header.module.css'


export default ({languages = [], onLanguageChange = f => f}) => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.logo} src="images/Logo-main.svg" />
            </div>
            <div>
                <select name="laguage" className={`form-control`} onChange={onLanguageChange}>
                    {/* <option value="vi" data-thumbnail="images/Flag_of_Vietnam.svg">  VI</option>
                    <option value="en" data-thumbnail="images/Flag_of_the_United_Kingdom.svg">EN</option>
                    <option value="jp" data-thumbnail="images/Flag_of_Japan.png">JP</option> */}
                    {
                        languages.map(item => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>

        </div>
    )

   
}