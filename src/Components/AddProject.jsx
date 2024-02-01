import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import uploadProfileImage from '../assets/Images/imgholder.png'
import 'react-toastify/dist/ReactToastify.css';


function AddProject() {
  const [preview,setPreview]=useState("")
  const [fileStatus,setFileStatus]=useState(false)
  const [show, setShow] = useState(false)
  const [projectData,setProjectData] =useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  console.log(projectData);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setProjectData({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
    setPreview("")
  }
  useEffect(()=>{
    console.log(projectData.projectImage.type);
    if (projectData.projectImage.type=="image/png" || projectData.projectImage.type=="image/jpg" ||  projectData.projectImage.type=="image/jpeg" ) {
      console.log("generate image URL");
      setPreview(URL.createObjectURL(projectData.projectImage));
      setFileStatus(false)
    }else{
      console.log("Please upload following extensions (png,jpg,jpeg) only");
      setFileStatus(true)
      setPreview("")
      setProjectData({...projectData,projectImage:""})
    }
  },[projectData.projectImage])  

  const handleAddProject = ()=>{
    const {title,languages,overview,github,website,projectImage}=projectData
    if (!title || !languages || !overview || !github || !website || !projectImage) {
      toast.info("Please fill the form completely")
    }else{
      // api call - reqBody
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)
      // api call - reHeader
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
      }
      
      // api call
    }
  }
 
  return (
    <>
      <button onClick={handleShow} className='btn btn-success'><i className='fa-solid fa-plus'></i>Add Project</button>
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
                <input type="file" style={{ display: 'none' }} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} />
                <img  src={preview?preview:uploadProfileImage} style={{ height: '250px' }} className='w-100' alt="upload project image" />
              </label>
              {fileStatus&&<div className="text-danger mt-2">*Please upload following extensions (png,jpg,jpeg) only*</div>}

            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project title' value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} />
              </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Language Used' value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})} />
            </div>
            <div className="mb-3">
            <input type="text" className='form-control' placeholder='Project Github Link' value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})} />
          </div>
            <div className="mb-3">
          <input type="text" className='form-control' placeholder='Project Website Link' value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})}/>
        </div>
            <div className="mb-3">
        <input type="text" className='form-control' placeholder='Project Overview' value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})} />
      </div>
    </div >
         </div >
        </Modal.Body >
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button onClick={handleAddProject} variant="primary">Add</Button>
    </Modal.Footer>
      </Modal >
    </>
  )
}

export default AddProject