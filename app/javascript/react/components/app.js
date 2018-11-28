import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../state/initialData'
import Column from './column'

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
         <Column
           tasks={this.state.tasks}
         />
       </div>
     </DragDropContext>
   )
 }
}

export default App
