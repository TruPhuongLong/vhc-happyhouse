import React from 'react';
import { connect } from 'react-redux'
import { LANGUAGE_SWITCH } from '../../redux/actions/type'

import styles from './header.module.css'

class Header extends React.Component {
    render() {
        const { languages, current, switchLanguage } = this.props
        return (
            <div className={styles.container}>
                <div>
                    <img className={styles.logo} src="images/Logo-main.svg" />
                </div>
                <div>
                    <select
                        name="laguage"
                        className={`form-control`}
                        onChange={e => switchLanguage(e.target.value)}
                        defaultValue={languages.indexOf(current)}
                    >
                        {
                            languages.map((item, index) => (
                                <option value={index} key={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { languages, current } = state.languageState;
    return { languages, current };
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchLanguage: (index) => {
            dispatch({ type: LANGUAGE_SWITCH, payload: index })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)