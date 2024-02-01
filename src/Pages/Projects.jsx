import React from 'react'
import Header from '../Components/Header'
import { Col,Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'


function Projects() {
  return (
    <>
    <Header/>
    <div className="project-page-design">
       <div className="d-flex justify-content-between m-5">
       <h1>All projects</h1>
       <input style={{width:'300px'}} className='rounded' type="text" placeholder='search  by projects by language used' />
       </div>
       </div>
    <Row className='mt-5 container-fluid'>
      <Col sm={12} md={6} lg={4}>
      <ProjectCard/>
      </Col>
    </Row>
    </>
  )
}

export default Projects