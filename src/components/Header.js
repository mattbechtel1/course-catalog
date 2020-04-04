import React from 'react'
import {connect} from 'react-redux'
import {AppBar, Toolbar} from '@material-ui/core'
import NavButton from './HeaderButton'
import {LockOpen as LockIcon, Favorite as FavoriteIcon, AccountCircle as AccountIcon, LaptopChromebook as CourseIcon, Home as HomeIcon} from '@material-ui/icons'


const loggedInOpts = [
    { 
        icon: HomeIcon,
        label: 'home',
        path: '/home'
    }, {
        icon: CourseIcon,
        label: 'courses',
        path: '/courses'
    }, {
        icon: AccountIcon,
        label: 'profile',
        path: '/profile'
    }, {
        icon: FavoriteIcon,
        label: 'saved',
        path: '/favorites'
    }, {
        icon: LockIcon,
        label: 'logout',
        path: '/logout'
    }
]

const noUserOpts = [
    loggedInOpts[0],
    {
        icon: LockIcon,
        label: 'sign in',
        path: '/login'
    }
]

const Navbar = ({user}) => {

    const navOpts = user ? loggedInOpts : noUserOpts

    return <AppBar position='static'>
        <Toolbar>
            {navOpts.map(({icon, label, path}) => <NavButton icon={icon} label={label} path={path} key={label}/>)}
        </Toolbar>
    </AppBar>    
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(Navbar)