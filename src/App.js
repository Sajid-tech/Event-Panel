import React from 'react'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes, Route

} from "react-router-dom";
import Admin from './components/Admin';
import ProtectedRoute from './components/ProtectedRoute'
import Maintenance from './components/Maintence';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
          <Route path='/maintenance' element={<Maintenance />} />
        </Routes>
      </Router>
    </>
  )
}

export default App






