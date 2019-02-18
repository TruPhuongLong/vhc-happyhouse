import React, { Fragment } from 'react'
import {connect} from 'react-redux'

class Children1 extends React.Component {
    render() {
        const { languages, current } = this.props;
        return (
            <div>
                {
                    current === languages[0] ?
                        // VI
                        <Fragment>
                            <h1>Chia sẻ phòng</h1>
                            <p>Chuyển đến tòa nhà sang trọng với mức giá chia nhỏ cho các bạn cùng phòng. </p>
                        </Fragment>
                        : current === languages[1] ?
                            //EN
                            <Fragment>
                                <h1>Shared Apartment Living</h1>
                                <p>Move into a luxury building at a fraction of the cost. We enable individuals to thrive together as housemates.</p>
                            </Fragment>
                            : //JP
                            <Fragment>
                                <h1>Shared Apartment Living</h1>
                                <p>Move into a luxury building at a fraction of the cost. We enable individuals to thrive together as housemates.</p>
                            </Fragment>
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { languages, current } = state.languageState;
    return { languages, current };
}


export default connect(mapStateToProps)(Children1)