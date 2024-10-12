import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './views/home';
import { AuthProvider } from './views/AuthContext'; // Import AuthProvider
import { Toaster } from 'sonner';
import ProtectedRoute from './views/PrivateRoute';
import './index.css';
import BulkEnrollmentForm from './views/register';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} /> {/* Login route */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> {/* Protect the home route */}
        <Route path="/register" element={<ProtectedRoute><BulkEnrollmentForm /></ProtectedRoute>} /> 
      </Routes>
      <Toaster position="top-center" />
    </AuthProvider>
  </BrowserRouter>
);
