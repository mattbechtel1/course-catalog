import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   subject: {
       backgroundColor: theme.palette.secondary.light,
       color: theme.palette.secondary.contrastText,
       borderRadius: '8px',
       fontSize: 'small',
       padding: theme.spacing(0.5),
       margin: theme.spacing(1)
   } 
}))

const SubjectCircle = ({text}) => {
    const classes = useStyles()

    return <div className={classes.subject}>{text}</div>
}

export default SubjectCircle