import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../state/initialData'
import Task from './task'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialData
  }

  onDragEnd = result => {
    console.log("end");
  }

  render() {
    const tasks = this.state.tasks.map(task => {
      return(
        <Task
          key={task}
          task={task}
        />
      )
    })
   return (
     <DragDropContext onDragEnd={this.onDragEnd}>
       <div className="list">
         <h1>List</h1>
        {tasks}
       </div>
     </DragDropContext>
   )
 }
}

export default App
