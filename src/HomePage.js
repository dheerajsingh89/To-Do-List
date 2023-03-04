import React from 'react'
import './App.css'
import Create from './Create/Create';
export default function HomePage() {
  return (
    <div className="App">
   <div class="content">
  <h2 class="text-shadows">To Do List</h2>
</div>
     <div className="create"> <Create/></div>
     
   </div>
  )
}
