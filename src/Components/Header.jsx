import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header(insideDashboard) {
  return (
    
    <Navbar style={{backgroundColor: '#90ee90'}} >
    <Container>
      <Navbar.Brand className='text-light fw-bolder fs-4'>
    <Link to={'/'} className='text-light' style={{textDecoration:'none'}}>
          <i style={{height:'26px'}} className='fa-solid fa-paperclip'></i>
      <span >   Project Fair</span>
    </Link>
      </Navbar.Brand>
      {
            insideDashboard &&
            <div className='ms-auto'>
              <button className='btn text-danger'><i class="fa-solid fa-gear"></i>Logout</button>
            </div>
          }
    </Container>
  </Navbar>
  )
}

export default Header