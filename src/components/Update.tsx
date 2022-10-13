import {Form, Button} from 'react-bootstrap';
import api from '../api/jobs';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

function Update() {
const {id}=useParams();
  const [updatjob,setupdatjob]=useState<any>('')
  
 
  //retrive jobs
  const retriveJobs= async ()=>{
    const response= await api.get('/jobs')
    return response.data
  }

  useEffect(() => {
    const getAllJobs= async ()=>{
        const allJobs = await retriveJobs();
        const jobwit=allJobs.filter((job:any)=>job.id==id)
        setupdatjob(jobwit)
    }
    getAllJobs();
    console.log(updatjob)

    }, [])

  return (
    <div className='container'>
     
         {
          updatjob.map((item:any)=>(
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter job level</Form.Label>
              <Form.Control type="text"
               value={item.level}
               placeholder="eg: entrylevel, mid-senior, associate" required />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Job Type</Form.Label>
              <Form.Control value={item.title} type="text" placeholder="Enter the job" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={item.description}
              placeholder="Qualifications and brief description" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control type="date" value={item.deadline} required/>
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Post Job
            </Button>
          </Form>
          ))
         }
   
     
    </div>
  )
}

export default Update