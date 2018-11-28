import React from 'react'
import initialData from '../state/initialData'
import Task from './task'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialData
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
     <div className="list">
       <h1>List</h1>
      {tasks}
     </div>
   )
 }
}

export default App
