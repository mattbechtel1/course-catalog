import React from 'react'
import {connect} from 'react-redux'
import {Toolbar, makeStyles, TextField, FormControl, MenuItem, Select, FormHelperText, FormControlLabel, Checkbox} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    filterBar: {
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap'
    },
    label: {
        margin: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(2),
    },
    inputs: {
        color: theme.palette.primary.contrastText
    }
}))

const FilterBar = ({filter, toggle, state, subjects, favOnly}) => {
    const {textFilter, subjectFilter} = state
    const classes = useStyles()
    
    return <Toolbar className={classes.filterBar}>
        <label className={classes.label}>Filtering Options:</label>

        <FormControl className={classes.formControl}>
            <TextField id="course-search" 
                InputProps={{className: classes.inputs}}
                type="search"
                name='textFilter'
                value={textFilter}
                className={classes.inputs}
                variant='outlined'
                onChange={(e) => filter(e)}
                />
            <FormHelperText className={classes.inputs}>Keyword Search</FormHelperText>
        </FormControl>


        <FormControl className={classes.formControl}>
            <Select
                className={classes.inputs}
                labelId='Subject Filter'
                name='subjectFilter'
                value={subjectFilter}
                onChange={(e) => filter(e)}
                variant='outlined'
            >
                {subjects.map(subject => <MenuItem key={subject} value={subject}>{subject}</MenuItem>)}
            </Select>
            <FormHelperText className={classes.inputs}>Filter by Subject Area</FormHelperText>
        </FormControl>


        <FormControl className={classes.formControl}>
            <FormControlLabel
                control={
                    <Checkbox checked={favOnly} 
                        color='secondary'
                        name='favoritesFilter'
                        onChange={(e) => toggle(e)}
                    />
                }
                label='Only Display Saved Courses' />
        </FormControl>
    </Toolbar>
}

const mapStateToProps = ({subjects}) => ({subjects})

export default connect(mapStateToProps)(FilterBar)