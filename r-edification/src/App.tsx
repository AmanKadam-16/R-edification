import React, { useEffect } from 'react'
import LoginForm from './views/form'
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem('userName') === null) {
      sessionStorage.setItem('userName','admin@gmail.com');
    }
    if(sessionStorage.getItem('pwd') === null) {
      sessionStorage.setItem('pwd', '123')
    }
  },[])
  const [userCredentials, setUserCredentials] = React.useState({
    userName: '',
    password: ''
  });
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }
  function handleFormSubmit() {
   let user = sessionStorage.getItem('userName');
   let pwd = sessionStorage.getItem('pwd');
   if(userCredentials.userName === user && userCredentials.password === pwd) {
    toast("Welcome Admin ✨,", {
      description: "Login Successful. Heading towards Admin Panel."
    });
    navigate('./home')
   } else {
    toast("Invalid Credentials 😓,", {
      description: "Please enter correct login details."
    })
   }
  }
  return (
<>
<LoginForm credentials={userCredentials} handleChange={handleFormChange} handleSubmit={handleFormSubmit} />
</>
  )
}

export default App