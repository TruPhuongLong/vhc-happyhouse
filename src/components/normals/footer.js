import React from 'react'
import { FacebookProvider, Like, Share, ShareButton, Comments } from 'react-facebook'

import styles from './footer.module.css'

export default () => {
    return (
        <footer className={`${styles.footer} text-center`}>
            <FacebookProvider appId="346089532660486">
                <Like href="https://vhc-happyhouse.herokuapp.com/" colorScheme="dark" showFaces share />
            </FacebookProvider>
            <br />

            <address>
                Visit us at:<br />
                Example.com<br />
                Box 564, Disneyland<br />
                USA
            </address>

            <br />
            <i>Copyright © Happy House 2019</i>
        </footer>
    )
}