import React from 'react';
import Task from './task';

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks.map(task => {
      return(
        <Task
          key={task}
          task={task}
        />
      )
    })
    return (
      <div>
        {tasks}
      </div>
    )
  }
}

export default TaskList
