import React from 'react'
import {connect} from 'react-redux'
import {AppBar, Toolbar} from '@material-ui/core'
import NavButton from './HeaderButton'
import {LockOpen as LockIcon, Favorite as FavoriteIcon, AccountCircle as AccountIcon, LaptopChromebook as CourseIcon, Home as HomeIcon} from '@material-ui/icons'


const loggedInOpts = [
    { 
        icon: HomeIcon,
        label: 'home',
        path: '/home',
        final: false
    }, {
        icon: CourseIcon,
        label: 'courses',
        path: '/courses',
        final: false
    }, {
        icon: AccountIcon,
        label: 'profile',
        path: '/profile',
        final: false
    }, {
        icon: FavoriteIcon,
        label: 'saved',
        path: '/favorites',
        final: false
    }, {
        icon: LockIcon,
        label: 'logout',
        path: '/logout',
        final: true
    }
]

const noUserOpts = [
    loggedInOpts[0],
    {
        icon: LockIcon,
        label: 'sign in',
        path: '/login',
        final: true
    }
]

const Navbar = ({user}) => {

    const navOpts = user ? loggedInOpts : noUserOpts

    return <AppBar position='static'>
        <Toolbar>
            {navOpts.map(({icon, label, path, final}) => <NavButton icon={icon} label={label} path={path} key={label} final={final}/>)}
        </Toolbar>
    </AppBar>    
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(Navbar)