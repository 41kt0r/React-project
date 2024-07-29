import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Catalog from "./components/catalog/Catalog"
import AddSet from "./components/add-set/AddSet"
import HookahDetails from "./components/hookah-details/HookahDetails"

function App() {

  return (
    <>
      <Header />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:setId/details" element={<HookahDetails/>} />
        <Route path="/addSet" element={<AddSet />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
