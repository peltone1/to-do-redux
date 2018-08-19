import React from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Task from './Task'



const TaskList = (props) => (
    <Paper>
        <div>
            <List>
           
                                   
                                        <Task
                                            key={props.id}
                                            task={props.task}
                                            
                                            isComplete={props.isComplete}
                                            id={props.id}
                                        />
                  
            </List>
        </div>
    </Paper>
)


const mapStateToProps = state => ({
    _tasks: state.tasksList.tasks,
    
})

export default connect(mapStateToProps, null)(TaskList)


