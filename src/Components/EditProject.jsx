
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import uploadProfileImage from '../assets/Images/imgholder.png'


function EditProject() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className='btn '><i className='fa-solid fa-pen-to-square fa-2x'></i></button>
      <Modal
        show={show}
        size='lg'
        centered
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label >
                <input type="file" style={{ display: 'none' }} />
                <img src={uploadProfileImage} style={{ height: '250px' }} className='w-100' alt="upload project image" />
              </label>

            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Language Used' />
            </div>
            <div className="mb-3">
            <input type="text" className='form-control' placeholder='Project Github Link' />
          </div>
            <div className="mb-3">
          <input type="text" className='form-control' placeholder='Project Website Link' />
        </div>
            <div className="mb-3">
        <input type="text" className='form-control' placeholder='Project Overview' />
      </div>
    </div >
         </div >
        </Modal.Body >
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary">Add</Button>
    </Modal.Footer>
      </Modal >
    </>
  )
}

export default EditProject