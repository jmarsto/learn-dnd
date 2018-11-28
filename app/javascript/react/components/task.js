import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task} index={this.props.index}>
        {provided => (
          <div className="task"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.task}
          </div>
        )}
      </Draggable>
    )
  }
}

export default Task
