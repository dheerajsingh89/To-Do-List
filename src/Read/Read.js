import axios from 'axios'
import React ,{useEffect, useState}from 'react'//useEffect hook is used in fetching the data from api
import {  Table ,Button } from 'semantic-ui-react'
import './Read.css'
import { Link,useNavigate } from 'react-router-dom'

export default function Read() {
    const navigate=useNavigate()
    let [apiData,setApiData]=useState('')
    useEffect(()=>{
        axios.get(`https://63cd72be0f1d5967f0306ddf.mockapi.io/crud`).then((getdata)=>setApiData(getdata.data))
    },[])
    // console.log("apidata=")      
    console.log(apiData)
    // console.log(ApiData)
    const SaveIdtoLocalStorage=(id,name,due)=>{
          localStorage.setItem('Id_Of_Item',id)//saving the id of task in local storage as name key name of 'Id_Of_Item' for update process where we have to use the id of task
          localStorage.setItem('task_Name',name)//saving taskName and dueTime in local storage because in update tab we'll show this taskname and duetime from fetching this data from local storage there to show which data we are going to update
          localStorage.setItem('due_Time',due)
    }
    const onDelete=(id)=>{
      
            axios.delete(`https://63cd72be0f1d5967f0306ddf.mockapi.io/crud/${id}`).then((getdata)=>setApiData(getdata.data)).then(()=>navigate('/')) //after deletion we are updating our apiData
   

    }
  return (
    <div className='ReadTable'>
       <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Task Name</Table.HeaderCell>
        <Table.HeaderCell>Due Time</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {apiData &&
        apiData.map((task)=>
           {return(
                <Table.Row>
                <Table.Cell>{task.id}</Table.Cell>
                <Table.Cell>{task.taskName}</Table.Cell>
                <Table.Cell>{task.duetime}</Table.Cell>
                <Table.Cell> <Link to='/update'><Button color='green' onClick={()=>SaveIdtoLocalStorage(task.id,task.taskName,task.duetime)}>Update</Button></Link> </Table.Cell>
                <Table.Cell> <Button color='red' onClick={()=>onDelete(task.id)}>Delete</Button></Table.Cell>
               </Table.Row>
           )}
        )
     }
    
    </Table.Body>
  </Table>
    </div>
  )
}
