import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI,loginAPI } from '../Services/allAPIs';
import Spinner from 'react-bootstrap/Spinner';





function Auth({ insideRegister }) {
  const [loginStatus,setLoginStatus] = useState(false)
  const navigate = useNavigate()
  const [userData,setUserData]= useState({
    username:"",email:"",password:""
  })

  const handleRegister = async(e)=>{
    e.preventDefault()
    console.log(userData);
    const {username,email,password} = userData
    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    }else{
      // toast.success("ProceeD to api call")
      try{
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status==200) {
          toast.success(`${result.data.username} has registered successfully`)
          setUserData({username:"",email:"",password:""})
          setTimeout(()=>{
            navigate('/login')
          },3000)
        }else{
          toast.warning(result.response.data)
        }

      }catch(err){
        console.log(err);
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { email, password } = userData
    if (!email || !password) {
      toast.info("please fill the form completely!!!!")
    }
    else {
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status === 200) {
          setLoginStatus(true)
          sessionStorage.setItem("username", result.data.existingUser.username)
          sessionStorage.setItem("token", result.data.token)
          setTimeout(()=>{
          setUserData({ email: "", password: "" })

          navigate('/')
          setLoginStatus(false)
        },2000)

        }
        else {
          toast.warning(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  console.log(userData);
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <Link to={'/'}>Back to home</Link>
        <div className='card shadow p-5 bg-primary'>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src="https://site-img-res-new.s3.ap-south-1.amazonaws.com/next-site-images/Group9473.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div className='d-flex align-items-center flex-column'>
                <h1 className='fw-bolder text-light mt-2'><i style={{ height: '41px' }} className='fa-solid fa-paperclip'></i>Project Fair</h1>
                <h5 className='fw-bolder mt-2 pb-3 text-light'>
                  {insideRegister ? 'Sign up to your account' : 'Sign in to your account'}
                </h5>

                <Form className='w-100'>
                  {
                    insideRegister && (<Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="email" placeholder="Enter Username" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                  </Form.Group>
                  {
                    insideRegister?
                    <div>
                      <button onClick={handleRegister} className='btn btn-success mb-2'>Register</button>
                      <p>Already have an account? Click here to <Link className='text-dark' to={'/login'}>Login</Link></p>
                    </div>:
                    <div>
                    <button onClick={handleLogin} className='btn btn-light mb-2'>Login {loginStatus && <Spinner className='ms-1' animation="border"  />}</button>
                    
                    <p >New User? Click here to <Link className='text-danger' to={'/register'}>Register</Link></p>
                    </div>

                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'/>
    </div>
  )
}

export default Auth