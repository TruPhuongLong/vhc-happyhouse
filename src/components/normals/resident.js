import React from 'react'

import styles from './resident.module.css'

export default ({ imgSrc = '', job = '', age = '', address = '', content = '' }) => {
    return (
        <div className="row">
            <div className="col-md-4 order-md-2">
                <img className={styles.img} src={imgSrc} />
            </div>
            <div className="col-md-8 order-md-1">
                <p>"{content}"</p>
                <br />
                <h5>{job}, {age}</h5>
                <i className="fa fa-home" style={{ fontSize: '24px' }}></i> <strong>{address}</strong>
            </div>
        </div>
    )
}