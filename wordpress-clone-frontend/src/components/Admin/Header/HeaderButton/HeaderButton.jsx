import React from 'react'
import PropTypes from 'prop-types'
import "./HeaderButton.scss"

const HeaderButton = props => {
    const {buttonName} = props;
    return (
    <button className="HeaderButton">{buttonName}</button>
    )
}

HeaderButton.propTypes = {

}

export default HeaderButton
