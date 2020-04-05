import { combineReducers } from 'redux' 

function userReducer(state=true, action) {
    return state
}

function coursesReducer(state=[], action) {
    switch (action.type) {
       case 'LOAD_COURSES':
           return action.courses
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