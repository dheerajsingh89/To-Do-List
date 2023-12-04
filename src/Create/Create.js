import React ,{ useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
export default function Create() {
    const navigate=useNavigate()
    let [taskName,settaskName]=useState('')
    let [duetime,setduetime]=useState('')
    // console.log(taskName)
    // console.log(duetime)
    function SubmitHandler(){
        axios.post(`https://63cd72be0f1d5967f0306ddf.mockapi.io/crud`,{taskName,duetime}).then(()=>navigate('/read'));
        settaskName('')
        setduetime('')
    }
  return (
    <div className='form_create' style={{}}>
       <Form>
    <Form.Field>
      <label style={{"alignItems":"center","color":"white","fontSize":"1.2rem"}}>Task Name</label>
      <input placeholder='Task Name' value={taskName}  onChange={(e)=>settaskName(e.target.value)} style={{"width":"30rem"}}/>
    </Form.Field>
    <Form.Field>
      <label style={{"alignItems":"center","color":"white","fontSize":"1.2rem"}}>Due Time</label>
      <input style={{"width":"30rem"}} placeholder='Due Time' value={duetime} type='datetime-local' onChange={(e)=>setduetime(e.target.value)}/>
    </Form.Field>
    <Button style={{"width":"15rem"}} type='submit' color='pink' onClick={SubmitHandler} >Add</Button>
   <Link to='/read'> <Button style={{"width":"14.5rem"}} color='green'>check tasks</Button></Link>
  </Form>
    </div>
  )
}
