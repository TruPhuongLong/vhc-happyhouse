import React from 'react'

import styles from './benifit.module.css'

export default () => {
    return (
        <div className={`table-responsive-sm`}>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-center">
                            <img className={styles.logo} src="images/Logo-main.svg" alt="logo" />
                        </th>
                        <th className="text-center">Traditional Room</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Match with vetted housemates</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="material-icons" style={{fontSize: '36px'}}>close</i></td>
                    </tr>
                    <tr>
                        <td>Move into a vacant unit</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="material-icons" style={{fontSize: '36px'}}>close</i></td>
                    </tr>
                    <tr>
                        <td>Pay rent individually</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="material-icons" style={{fontSize: '36px'}}>close</i></td>
                    </tr>
                    <tr>
                        <td>Protection against a housemate’s missed payment</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="material-icons" style={{fontSize: '36px'}}>close</i></td>
                    </tr>
                    <tr>
                        <td>Departing housemates replaced for you</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="material-icons" style={{fontSize: '36px'}}>close</i></td>
                    </tr>
                    <tr>
                        <td>Community activities</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="material-icons" style={{fontSize: '36px'}}>close</i></td>
                    </tr>
                    <tr>
                        <td>Renewal option</td>
                        <td className={`${styles.bg} text-center`}><i className={`material-icons`} style={{fontSize: '36px'}}>check</i></td>
                        <td className="text-center"><i className="fa fa-question" style={{fontSize: '24px'}}></i></td>
                    </tr>
                    <tr className="font-weight-bold">
                        <td >Monthly Cost:</td>
                        <td className={`${styles.bg} text-center`}>$800*</td>
                        <td className="text-center">$1.120</td>
                    </tr>
                </tbody>
            </table>
            <br /><p className="text-center">* Price of a typical Converted room in most HomeShare locations.</p>
        </div>
    )
}