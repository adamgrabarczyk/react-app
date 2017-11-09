import React from 'react'
import logo from './logo.svg';
import PropTypes from 'prop-types'

function Header(props) {
    return(
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.message}</h1>
        </div>
    )

}

Header.propTypes = {
    message: PropTypes.string.isRequired
}

export default Header