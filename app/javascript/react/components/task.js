import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        {this.props.task}
      </div>
    )
  }
}

export default Task
