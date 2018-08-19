import React from 'react'
import { connect } from 'react-redux'

import AddForms from './AddForms'
import TaskList from './TasksList';

const ToDo = (props) => {

    return (
            <div>
                <AddForms />
                <TaskList />
            </div>
    )
}


export default connect()(ToDo) 