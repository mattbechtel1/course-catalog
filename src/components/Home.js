import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../books-logo.jpg'

const Home = ({user}) => <div>
    <h1>Welcome to Our Course Catalog</h1>
    <div><img src={logo} alt='logo' style={{width: '50%'}} /></div>
    {user ? null : <Link to='/login'>Sign In</Link>}
</div>

export default Home