import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import FilterBar from './FilterBar'
import {courses} from '../data/mockData'
import CourseTile from './CourseTile'
import {Grid} from '@material-ui/core'

class Courses extends React.Component {
    constructor() {
        super()
        this.state = {
            textFilter: '',
            subjectFilter: '',
            favoritesFilter: false
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            courses: courses
        })
        
        if (this.props.title) {
            this.setState({
                ...this.state,
                favoritesFilter: true
            })
        }
    }

    changeFilter = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    toggleFilter = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: !this.state[e.target.name]
        })
    }

    render() {
        const Title = this.props.title ? this.props.title : null
        const relevantCourses = this.props.courses.filter(course => {
            return course.title.toLowerCase().includes(this.state.textFilter.toLowerCase()) || course.description.toLowerCase().includes(this.state.textFilter.toLowerCase())
        })
        .filter(course => {
            return course.subjects.includes(this.state.subjectFilter) || this.state.subjectFilter === ''
        })
        .filter(course => {
            return this.state.favoritesFilter ? this.props.user.saved.includes(course.id) : true
        })

        return <>
            <FilterBar
                filter={this.changeFilter}
                toggle={this.toggleFilter}
                favOnly={this.state.favoritesFilter}
                state={this.state}
            />
            {Title ? <Title /> : null}
            <div>
                <Grid container spacing={4}>
                    {relevantCourses.map(course => <Grid item key={course.id} xs={4}>
                        <CourseTile course={course} />
                    </Grid>)}
                </Grid>
            </div>
        </>

    }
}

const mapStateToProps = ({user, courses}, {location}) => ({user, courses, location})

export default withRouter(connect(mapStateToProps)(Courses))