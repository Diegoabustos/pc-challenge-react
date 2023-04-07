import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthProvider'
import { DashProvider } from './context/DashProvider'
import { ProtectRoute } from './layouts/ProtectRoute'
import { Dashboard } from './pages/Dashboard'
function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
        <DashProvider>
          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login />} /> 
            </Route>
            <Route path='/dashboard' element={<ProtectRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </DashProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
