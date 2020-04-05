import React from 'react'
import {connect} from 'react-redux'

const FavHeader = ({user: {username}}) =>  <h1>{`${username}'s Favorites`}</h1>

export default connect(({user}) => ({user}))(FavHeader)