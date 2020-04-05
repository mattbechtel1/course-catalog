import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../store/actions'

const Logout = ({logout}) => {
    logout()
    return <Redirect to='/login' />
}

export default connect(null, {logout})(Logout)