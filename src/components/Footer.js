import React from 'react'
import {Toolbar, AppBar, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    footer: {
        top: 'auto',
        bottom: 0
    }
}))

const Footer = () => {
    const classes = useStyles()
   
    return <AppBar className={classes.footer}>
        <Toolbar>Footer</Toolbar>
    </AppBar>
}

export default Footer