import React from 'react'
import SubjectCircle from './SubjectCircle'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    subjectContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}))

const SubjectContainer = ({id, subjects, introCourse}) => {
    const classes = useStyles()

    return <div className={classes.subjectContainer}>
        {subjects.map(subject => <SubjectCircle key={`${id}-${subject}`} text={subject}/>)}
        {introCourse ? <SubjectCircle key={`${id}-intro`} text='Intro Course' /> : null}
    </div>
}

export default SubjectContainer