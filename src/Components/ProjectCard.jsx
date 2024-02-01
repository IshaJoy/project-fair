import React,{useState} from 'react'
import {Card,Modal,Row,Col} from 'react-bootstrap'

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
      <>
      <Card className='shadow btn mb-5 w-50' onClick={handleShow} >
      <Card.Img width={'100%'} variant="top" src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1688447700/catalog/1676096237488115712/sqgn7t85fvitbmzzw7zh.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img  className='img-fluid ' style={{height:'200px'}} src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1688447700/catalog/1676096237488115712/sqgn7t85fvitbmzzw7zh.jpg" alt="" />
             </Col>
             <Col md={6}>
              <h2 className='fw-bolder text-dark'>Project Title</h2>
              <p>Project Overview: <span className='fw-bolder'style={{textAlign:'justify'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eveniet a, dolorem dignissimos ut ad totam deleniti vitae necessitatibus dolores sequi maiores atque magnam debitis, numquam aut quo minima harum?</span></p>
              <p>Language used: <span className='fw-bolder text-danger'>HTML,CSS,JS</span></p>
             </Col>

          </Row>

          <div className="mt-3">
            <a href="https://github.com/IshaJoy/project-fair" target='_blank' className='btn me-3'><i style={{height:'40px'}} className='fa-brands fa-github fa-2x' ></i> </a>
            <a href="" target='_blank' className='btn me-3'><i style={{height:'40px'}} className='fa-solid fa-link fa-2x' ></i> </a>
          </div>
        </Modal.Body>
      </Modal>
      </>
    
  )
}

export default ProjectCard