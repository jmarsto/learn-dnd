import React from 'react';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';
import TaskList from './taskList';

class Column extends React.Component {
  render() {

    return (
      <Droppable droppableId="unique">
        {(provided) => (
        <TaskList
          tasks={this.props.tasks}
          innerRef={provided.innerRef}
          {...provided.droppableProps}
        >
          {provided.placeholder}
        </TaskList>
      )}
      </Droppable>
    )
  }
}

export default Column
