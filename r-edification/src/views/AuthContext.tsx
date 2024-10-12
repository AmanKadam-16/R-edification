import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Create the context
const AuthContext = createContext<any>(null);

// AuthProvider component to wrap your app and provide auth state
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if user is authenticated on component mount (or page refresh)
  useEffect(() => {
    const user = sessionStorage.getItem('userName');
    const pwd = sessionStorage.getItem('pwd');
    if (user && pwd) {
      setIsAuthenticated(true); // User is already logged in
    }
  }, []);

  // Function to handle login
  const login = (userName: string, password: string) => {
    const storedUser = sessionStorage.getItem('userName');
    const storedPwd = sessionStorage.getItem('pwd');
    if (userName === storedUser && password === storedPwd) {
        toast("Welcome Admin ✨,", {
            description: "Login Successful. Heading towards Admin Panel."
          });
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true'); // Persist auth state
      // Navigate to the home page after login
      setTimeout(()=>{
        navigate('/home'); 
      },500)

    } else {
      setIsAuthenticated(false);
      toast("Login failed 😓,", {
        description: "Please check your credentials and try again.",
      });
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated'); // Clear session data
    navigate('/'); // Navigate back to the login page
  };

  // Context value
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
