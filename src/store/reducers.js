import { combineReducers } from 'redux' 

function userReducer(state=null, action) {
    switch (action.type) {
        case 'LOG_USER_IN':
            return action.user
        case 'ADD_FAVORITE':
            return {
                ...state,
                saved: [...state.saved, action.courseId]
            }
        case 'UNFAVORITE':
            return {
                ...state,
                saved: state.saved.filter(courseId => courseId !== action.courseId)
            }
        default: 
            return state
    }
}

function coursesReducer(state=[], action) {
    switch (action.type) {
       case 'LOAD_COURSES':
           return action.courses
        case 'LOG_USER_IN':
            switch (action.user.restrictions) {
                case 'introductory':
                    return state.filter(course => course.intro_course)
                case 'approved_only':
                    return state.filter(course => action.user.approved.includes(course.id))
                default:
                    return state
            }
        default: 
            return state
    }
}

function courseReducer(state=null, action) {
    return state
}

function subjectsReducer(state=[], action) {
    switch (action.type) {
        case 'LOAD_SUBJECTS':
            return action.subjects.sort()
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    subjects: subjectsReducer,
    course: courseReducer
})

export default rootReducer