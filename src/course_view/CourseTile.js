import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addFavorite, unfavorite} from '../store/actions'
import SubjectContainer from './SubjectContainer'
import {Card, Typography, CardMedia, CardContent, makeStyles, CardActions, IconButton, Tooltip, Button} from '@material-ui/core'
import {Favorite as FavoriteIcon, FavoriteBorder as SaveIcon} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        maxWidth: 350
    },
    title: {
        fontSize: '1.125rem'
    },
}))

const CourseTile = ({course, user, unfavorite, addFavorite}) => {
    const classes = useStyles()
    const {title, subjects, short_desc, pic_url, id, intro_course} = course

    return <Card className={classes.card}>
        <CardMedia
            component='img'
            image={pic_url}
            title={title}
        />
        
        <CardContent>
            <Typography className={classes.title} variant='h4' gutterBottom color="textPrimary">
                {title}
            </Typography>
           
            <Typography component='p' color="textPrimary">
                {short_desc}
            </Typography>
            
            <SubjectContainer
                id={id}
                subjects={subjects}
                introCourse={intro_course} />
        </CardContent>
        
        <CardActions>
            {user.saved.includes(id) ?
                <IconButton aria-label='unfavorite' onClick={() => unfavorite(id)}>
                    <FavoriteIcon />
                </IconButton>
            :
                <Tooltip title='Save to Favorites'>
                    <IconButton aria-label='favorite' onClick={() => addFavorite(id)}>
                        <SaveIcon />
                    </IconButton>
                </Tooltip>
            }
            <Link to={`/courses/${course.id}`}>
                <Button 
                    variant='contained'
                    color='primary'>
                        Learn More
                </Button>
            </Link>
        </CardActions>
    </Card>
}

export default connect(({user}) => ({user}), {unfavorite, addFavorite})(CourseTile)