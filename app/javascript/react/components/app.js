import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import initialData from '../state/initialData'
import TaskList from './taskList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialData
  }

  onDragEnd = result => {
    console.log("end");
  }

  render() {

   return (
     <DragDropContext onDragEnd={this.onDragEnd}>
       <div className="list">
         <h1>List</h1>
         <Droppable droppableId="unique">
           {provided => (
             <TaskList
               tasks={this.state.tasks}
               innerRef={provided.innerRef}
               {...provided.droppableProps}
             >
              {provided.placeholder}
             </TaskList>
           )}
         </Droppable>
       </div>
     </DragDropContext>
   )
 }
}

export default App
