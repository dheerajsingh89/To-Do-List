import React ,{ useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const navigate=useNavigate()
    let [taskName,settaskName]=useState('')
    let [duetime,setduetime]=useState('')
    let [ID,setID]=useState(null)
    useEffect(()=>{//use useEffect hook to fetch data from local storage
        settaskName(localStorage.getItem('task_Name'))
        setduetime(localStorage.getItem('due_Time'))
        setID(localStorage.getItem('Id_Of_Item'))//we can fetch the items from local storage or API only with using useEffect hook (do remember)
    },[])
   
    function UpdateHandler(){
       
        console.log('id'+ID)
        axios.put(`https://63cd72be0f1d5967f0306ddf.mockapi.io/crud/${ID}`,{taskName,duetime}).then(()=>navigate('/'));
       
    }
  return (
    <div>
       <Form>
    <Form.Field>
      <label style={{"alignItems":"center" , "color":"white","fontSize":"1.2rem"}}>Task Name</label>
      <input  placeholder='Task Name' value={taskName} style={{"width":"30rem"}}  onChange={(e)=>settaskName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label style={{"alignItems":"center" , "color":"white","fontSize":"1.2rem"}}>Due Time</label>
      <input placeholder='Due Time' style={{"width":"30rem"}} value={duetime} type='datetime-local' onChange={(e)=>setduetime(e.target.value)}/>
    </Form.Field>
    <Button type='submit' onClick={UpdateHandler} style={{"color":"green","width":"30rem"}} >Update</Button>
  </Form>
    </div>
  )
}
