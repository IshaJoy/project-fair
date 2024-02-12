import React,{useEffect,useState} from 'react'
import landingImg from '../assets/Images/landing.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../Services/allAPIs';


function Home() {
  const navigate =useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [allProjects,setAllProjects]= useState([])
console.log(allProjects);

  const getHomeProject = async()=>{
    const result = await getHomeProjectAPI()
    if (result.status===200) {
      setAllProjects(result.data)
    }else{
      console.log(result);
    }
  }

  useEffect(() => {
    getHomeProject()
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  }, [])
  const handleProjectPage=()=>{
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    }
    else {
      toast.warning("please login to explore your projects")
    }
  }
  return (
    <>
      {/* landing part */}
      <div style={{ width: '100%', height: '100vh', backgroundColor: '#90ee90' }} className='rounded'>
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center">
            <div className="col-lg-5">
              <h1 style={{ fontSize: '70px' }} className='fw-bolder'><i style={{ height: '72px' }} className='fa-solid fa-paperclip'></i>Project Fair</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, corporis earum, sed ipsam tenetur consequuntur deserunt quae laudantium est, mollitia autem repellendus provident voluptates neque recusandae eius ratione! Quod, suscipit.</p>
              {isLoggedIn ? <Link className='btn btn-warning mt-3' to={'./dashboard'}> Manage your projects <i class="fa-solid fa-arrow-right ms-2"></i></Link> : <Link className='btn btn-warning' to={'./login'}> Starts to Explore <i class="fa-solid fa-arrow-right ms-2"></i></Link>
              }
            </div>

            <div className="col-lg-2"></div>
            <div className="col-lg-4 mt-5">
              <img className=' mt-1' src={landingImg} alt="" />
            </div>
            <div className="col-lg-1"></div>

          </div>
        </div>
      </div>

      {/* all projects */}
      <div className='projects mt-5'>
        <h1 className=' text-center mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className="d-flex justify-cintent-between">
            

            {allProjects.length>0? allProjects.map((project,index)=>(
            <div key={index} className='me-5'>
              <ProjectCard project={project} />
            </div>
            )):null }

          </div>
        </marquee>
        <div className="text-center">
          <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
        </div>
      </div>
      <ToastContainer autoClose={2000} theme='colored' />
    </>
  )
}

export default Home