import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Catalog from "./components/catalog/Catalog"
import AddSet from "./components/add-set/AddSet"
import HookahDetails from "./components/hookah-details/HookahDetails"
import { AuthContextProvider } from "./contexts/AuthContext"
import Edit from "./components/set-edit/Edit"
import RouteGuard from "./components/common/RouteGuard"
import Logout from "./components/logout/Logout"
import NotFound from "./components/not-found/NotFound"

function App() {
  return (
    <AuthContextProvider >
      <>
        <Header />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:setId/details" element={<HookahDetails />} />
          <Route element={<RouteGuard />}>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/addSet" element={<AddSet />} />
            <Route path="/catalog/:setId/edit" element={<Edit />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </>
    </AuthContextProvider>
  )
}

export default App
