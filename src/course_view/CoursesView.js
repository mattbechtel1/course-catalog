import React from 'react'
import {connect} from 'react-redux'
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
        return <>
            <FilterBar
                filter={this.changeFilter}
                toggle={this.toggleFilter}
                state={this.state}
            />
            <div>
                <Grid container spacing={4}>
                    {this.props.courses.map(course => <Grid item key={course.id} xs={4}>
                        <CourseTile course={course} />
                    </Grid>)}
                </Grid>
            </div>
        </>

    }
}

const mapStateToProps = ({user, courses}) => ({user, courses})

export default connect(mapStateToProps)(Courses)