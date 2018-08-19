import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import newTask from './state/newTask'
import tasksList from './state/tasksList'
import search from './state/search'

const reducer = combineReducers({
    newTask,
    tasksList,
    search, 
   
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

