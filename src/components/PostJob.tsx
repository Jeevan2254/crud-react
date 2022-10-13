import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

function PostJob() {
  const [level,setJobLevel]=useState('');
  const [title,setJobType]=useState('');
  const [description,setJobDesc]=useState('');
  const [deadline,setDeadline]=useState('');

  const handleSubmit= (event:any)=>{
   event.preventDefault();
    const newJob={level, title, description, deadline};
    //console.log(newJob);
    fetch('http://localhost:8000/jobs',{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(newJob)
    }).then(()=>{
     // console.log("new blog added")
     alert("New Job Posted");
    })
  }

  return (
    <div className='container'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter job level</Form.Label>
        <Form.Control type="text" value={level}
         onChange={(e)=>{setJobLevel(e.target.value)}} 
         placeholder="eg: entrylevel, mid-senior, associate" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Job Type</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=>{setJobType(e.target.value)}} placeholder="Enter the job" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e)=>{setJobDesc(e.target.value)}} 
        placeholder="Qualifications and brief description" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Application Deadline</Form.Label>
        <Form.Control type="date" value={deadline} onChange={(e)=>{setDeadline(e.target.value)}}  required/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Post Job
      </Button>
    </Form>
    </div>
  )
}

export default PostJob