import React from 'react'
import {connect} from 'react-redux'
import {AppBar, Toolbar, Button, IconButton, Typography, makeStyles} from '@material-ui/core'
import NavButton from './HeaderButton'
import {LockOpen as LockIcon, Favorite as FavoriteIcon, AccountCircle as AccountIcon, LaptopChromebook as CourseIcon, Home as HomeIcon} from '@material-ui/icons'

const Navbar = ({user}) => {
    return <AppBar position='static'>
        <Toolbar>
            {user ? 
                <>
                    <NavButton icon={HomeIcon} label='home' path='/home' />
                    <NavButton icon={CourseIcon} label='courses' path='/courses' />
                    <NavButton icon={AccountIcon} label='profile' path='/profile' />
                    <NavButton icon={FavoriteIcon} label='saved' path='/favorites' />
                    <NavButton icon={LockIcon} label='logout' path='/logout' />
                </>
            :
                <>
                    <NavButton icon={HomeIcon} label='home' path='/home' />
                    <NavButton icon={LockIcon} label='sign in' path='/login' />
                </>
            }
        </Toolbar>
    </AppBar>    
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(Navbar)