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
import { AuthContext } from "./contexts/AuthContext"
import Edit from "./components/set-edit/Edit"
import RouteGuard from "./components/common/RouteGuard"

function App() {
  //TODO: remove this from App component
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    //TODO: Quick solution, fix by implementing persisted auth state
    localStorage.setItem('accessToken', state.accessToken)

    setAuthState(state)
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <>
        <Header />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:setId/details" element={<HookahDetails />} />
          <Route element={<RouteGuard />}>
            <Route path="/addSet" element={<AddSet />} />
            <Route path="/catalog/:setId/edit" element={<Edit />} />
            {/* //logout */}
          </Route>

        </Routes>

        <Footer />

      </>
    </AuthContext.Provider>
  )
}

export default App
