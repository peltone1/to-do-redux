import { database } from '../firebaseConfig'

const TASK_CHANGE = 'newTask/TASK_CHANGE'
const CLEAR_ADDTASKFORM = 'newTask/CLEAR_ADDTASKFORM'

export const onTaskChangeAction = (event, value) => ({
    type: TASK_CHANGE,
    task: value
})

export const clearAddTaskFormAction = () => ({
    type: CLEAR_ADDTASKFORM
})

export const onAddTaskClickAction = () => (dispatch, getState) => {
    const state = getState()

    database.ref(`/tasks`).push({
        task: state.newTask.task,
        isComplete: false
    })
    dispatch(clearAddTaskFormAction())
}

const initialState = {
    task: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TASK_CHANGE:
            return {
                ...state,
                task: action.task
            }
        case CLEAR_ADDTASKFORM:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}