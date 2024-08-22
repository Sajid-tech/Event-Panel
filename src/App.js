import React from 'react'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes, Route

} from "react-router-dom";
import Admin from './components/Admin';
import ProtectedRoute from './components/ProtectedRoute'
import Maintenance from './components/Maintence';
import AppProvider from './context/Context';
import ParticipantAdmin from './components/ParticipantAdmin';
const App = () => {
  return (
    <>

      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/participants" element={<ProtectedRoute element={<ParticipantAdmin />} />} />
            <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
            <Route path='/maintenance' element={<Maintenance />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  )
}

export default App








