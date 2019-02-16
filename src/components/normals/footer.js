import React from 'react'

import styles from './footer.module.css'

export default () => {
    return (
        <footer className={`${styles.footer} text-center`}>
            <a href="#">CONTACT US</a>
            <br />
            <a href="#">facebook</a>
            <br />
            <i>Copyright © Happy House 2019</i>
        </footer>
    )
}