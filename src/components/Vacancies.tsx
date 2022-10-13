import React, { useEffect, useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api/jobs';

const Vacancies=()=>{

    const [jobsVacancies,setJobVacancies]=useState<any>([])

    //retrive jobs
    const retriveJobs= async ()=>{
        const response= await api.get('/jobs')
        return response.data
    }
    console.log(jobsVacancies)

    useEffect(() => {
    const getAllJobs= async ()=>{
        const allJobs = await retriveJobs();
        if(allJobs) setJobVacancies(allJobs) 
       // console.log(allJobs)
    }
    getAllJobs();

    }, [])
    

  return (
   <>
    <div className='container'>
    {
        jobsVacancies.map((job:any)=>(
            <Card className="text-center">
            <Card.Header>{job.level}</Card.Header>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
                {job.description}
              </Card.Text>
              <Button variant="primary">Apply now</Button>
              <Link to={`update/id=${job.id}`}><Button variant="light">Edit</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">{job.deadline}</Card.Footer>
          </Card>
        ))
    }
    </div>
   </>
  )
}

export default Vacancies