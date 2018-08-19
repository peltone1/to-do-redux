import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'
import { onTaskChangeAction, onAddTaskClickAction } from '../state/newTask'
import Paper from 'material-ui/Paper'

const AddForms = (props) => {



    return (
        <Paper>
        <div>
            <h3>What I should to do ?</h3>
            <div>
                <TextField
                    fullWidth ={true}
                    floatingLabelText="enter content task"
                    value={props._task}
                    onChange={props._onTaskChangeAction}
                />
            </div>

            <div>
                <RaisedButton
                    fullWidth ={true}
                    label="Add task"
                    primary={true}
                    onClick={props._onAddTaskClickAction}
                />
            </div>
        </div>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    _task: state.newTask.task,
})

const mapDispatchToProps = (dispatch) => ({
    _onTaskChangeAction: (event, value) => dispatch(onTaskChangeAction(event, value)),
    _onAddTaskClickAction: () => dispatch(onAddTaskClickAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddForms)