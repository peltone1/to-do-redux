import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';



import { isDeleteHandler, isCompletedHandler } from '../state/tasksList'


const Task = (props) => (
    <div className='list-item'>
        <ListItem
            primaryText={props.task}
            rightIcon={<DeleteIcon
                tooltip="Delete"
                onClick={() => props._isDeleteHandler(props.id)}
            />}
            leftCheckbox={
                <Checkbox 
                checked={props.isComplete}
                onCheck={(e) => props._isCompletedHandler(e.target.checked, props.id)}
                />
            }
        />
    </div>
)

const mapDispatchToProps = (dispatch) => ({
_isCompletedHandler: (isComplete, taskId) => dispatch(isCompletedHandler(isComplete, taskId)),
_isDeleteHandler: (taskId) => dispatch(isDeleteHandler(taskId))
})

export default connect(null, mapDispatchToProps)(Task)