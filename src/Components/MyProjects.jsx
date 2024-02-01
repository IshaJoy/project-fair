import React from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject' 

function MyProjects() {
  return (
    <div className='card shadow p-3'>
      <div className='d-flex justify-content-between'>
        <h2>My Projects</h2>
        <div> <AddProject/></div>
      </div>
      <div className="mt-4">
        <div className="border rounded d-flex justify-content-between align-items-center mb-3 p-2 text-danger">
          <h5 className='fw-bolder'>Project Title</h5>
          <div className='d-flex icons align-items-center'>
            <EditProject/>
            <a target='_blank' className='btn' href="https://github.com/IshaJoy/React-api-call"> <i style={{height:'34px'}} className='fa-brands fa-github fa-2x'></i></a>
            <button className="btn"> <i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i> </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyProjects