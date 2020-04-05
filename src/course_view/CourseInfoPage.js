import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect, Link} from 'react-router-dom'
import SubjectContainer from './SubjectContainer'
import {Paper, Button} from '@material-ui/core'
import {CheckCircle as CourseCompleteIcon} from '@material-ui/icons'
import {addFavorite, unfavorite} from '../store/actions'

const CourseInfoPage = ({match, courses, user, addFavorite}) => {
    const course = courses.find(course => course.id == match.params.id)
    const courseComplete = user.completedCourses.includes(course.id)
    const favorited = user.saved.includes(course.id)
    let FavButton
    
    if (favorited) {
        FavButton = () => <Button
            variant='contained'
            color='primary'
            onClick={() => unfavorite(course.id)}
            >
            Remove from Favorites
         </Button>                 
    } else {
        FavButton = () => < Button
        variant='contained'
        color='primary'
        onClick={() => addFavorite(course.id)}
    >
        Save to Favorites
    </Button>
    }

    if (!course) {
        return <Redirect to='/courses' />
    } else {
        return <Paper>
            <h1>{course.title}{courseComplete ? <CourseCompleteIcon color='primary'/> : null}</h1>
            <div>{course.description}</div>
            <SubjectContainer
                id={course.id}
                subjects={course.subjects}
                introCourse={course.intro_course}
            />
            <div>
                <Link to='/courses'>
                    <Button
                        variant='contained'
                        color='primary'>
                            Return to Course Catalog
                    </Button>
                </Link>

                <FavButton />
                
                <a href={course.course_url} target='_blank' rel='noopener noreferrer'>
                    <Button 
                        variant='contained'
                        color='primary'>
                            Go to Course
                    </Button>
                </a>
            </div>
        </Paper>
    }

}

export default withRouter(connect(({courses, user}, {match}) => ({courses, match, user}), {addFavorite, unfavorite})(CourseInfoPage))