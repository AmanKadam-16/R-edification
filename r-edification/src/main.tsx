// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/home.tsx'
import { Toaster } from 'sonner'
import BulkEnrollmentForm from './views/register.tsx'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<Routes>
  <Route path='/' element ={<App />} />
  <Route path='home' element={<Home />} />
  <Route path='register' element={<BulkEnrollmentForm />} />
</Routes>
<Toaster position="top-center" />
</BrowserRouter>
)
