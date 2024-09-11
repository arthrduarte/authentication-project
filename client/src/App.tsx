import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Logout from "./components/Logout"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import Delete from "./components/Delete"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="login" element={<ProtectedRoute Component={Login} />} />
            <Route path="register" element={<ProtectedRoute Component={Register} />} />
            <Route path="logout" element={<ProtectedRoute Component={Logout} />} />
            <Route path="dashboard" element={<ProtectedRoute Component={Dashboard} />} />
            <Route path="delete" element={<ProtectedRoute Component={Delete} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
