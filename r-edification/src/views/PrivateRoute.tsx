import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect to login page if not authenticated
  }

  return <>{children}</>; // If authenticated, render the children components (e.g., Home)
};

export default ProtectedRoute;
