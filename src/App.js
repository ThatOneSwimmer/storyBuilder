import './App.css'
import { Route, Routes } from "react-router-dom"
import { Menu } from "./pages/Menu"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Home } from "./pages/Home"


function App() {
  return (
    <main className= "main">
        <div className="topnav">
          <a href="/">Home</a>
          <a href="/menu">Menu & Pastries</a>
          <a href="/contact">Contact</a>
          <a href="/about">About Us</a>
          <button type="submit" className="button">Order Online</button>
        </div>
    <Routes>
      <Route path = "" Route element={<Home />} />
      <Route path ="/menu" element={<Menu/>} />
      <Route path ="/contact" element={<Contact/>} />
      <Route path ="/about" element={<About/>} />
      <Route/>
    </Routes>
    </main>
  )
}

export default App
