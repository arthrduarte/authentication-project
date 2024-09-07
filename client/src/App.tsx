import { ReactDOM } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Logout from "./components/Logout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
