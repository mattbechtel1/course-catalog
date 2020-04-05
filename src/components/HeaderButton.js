import React from 'react'
import {Button, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    navButton: {
        top: 0,
        right: 0,
        height: '100%',
        display: 'block'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        margin: theme.spacing(1)
    },
    finalLink: {
        marginLeft: 'auto',
        color: 'inherit',
        textDecoration: 'none',
    }
}))

const NavButton = ({icon, label, path, final}) => {
    const classes = useStyles();

    const linkClass = final ? classes.finalLink : classes.link

    const Icon = icon

    return <Link to={path} className={linkClass}>
        <Button color='inherit' className={classes.navButton}>
            <Icon
                color='inherit'
                aria-label={label}/>
            <div>{label}</div>
        </Button> 
    </Link>
}

export default NavButton