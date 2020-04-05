import React from 'react'
import {connect} from 'react-redux'
import {addFavorite, unfavorite} from '../store/actions'
import SubjectCircle from './SubjectCircle'
import {Card, Typography, CardMedia, CardContent, makeStyles, CardActions, IconButton, Tooltip} from '@material-ui/core'
import {Favorite as FavoriteIcon, FavoriteBorder as SaveIcon} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        maxWidth: 350
    },
    title: {
        fontSize: '1.125rem'
    },
    subjectContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}))

const CourseTile = ({course: {title, subjects, short_desc, pic_url, id, intro_course}, user, unfavorite, addFavorite}) => {
    const classes = useStyles()

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
            
            <div className={classes.subjectContainer}>
                {subjects.map(subject => <SubjectCircle key={`${id}-${subject}`} text={subject}/>)}
                {intro_course ? <SubjectCircle key={`${id}-intro`} text='Intro Course' /> : null}
            </div>
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
        </CardActions>
    </Card>
}

export default connect(({user}) => ({user}), {unfavorite, addFavorite})(CourseTile)