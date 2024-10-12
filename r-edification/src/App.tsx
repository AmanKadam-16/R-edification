import React, { useEffect, useState } from 'react';
import LoginForm from './views/form';
import { useAuth } from './views/AuthContext'; // Import AuthContext

const App = () => {
  const { login } = useAuth(); // Get the login function from AuthContext

  const [userCredentials, setUserCredentials] = useState({
    userName: '',
    password: ''
  });
  useEffect(()=>{
    if(sessionStorage.getItem('userName') === null) {
      sessionStorage.setItem('userName', 'admin@gmail.com');
    }
    if(sessionStorage.getItem('password') === null) {
      sessionStorage.setItem('pwd', '123');
    }
  },[]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    login(userCredentials.userName, userCredentials.password); // Use login function
  };

  return (
    <>
      <LoginForm
        credentials={userCredentials}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
      />
    </>
  );
};

export default App;
