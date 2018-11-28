import React from 'react';
import Task from './task';

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return(
        <div
          key={task}
          {...this.props}
          ref={this.props.innerRef}
        >
          <Task
            index={index}
            task={task}
          />
        </div>
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
