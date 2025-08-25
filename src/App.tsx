import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import PublicLayout from "@/layouts/public-layout" does NOT WORK because its a named export not default
// so we use {} or we export it as default
import { PublicLayout } from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layout"
import { MainLayout } from "@/layouts/main-layout"

import HomePage from "./routes/home"

import { SignInPage } from "./routes/sign-in"
import { SignUpPage } from "./routes/sign-up"
import ProtectedRoutes from "./layouts/protected-routes"


const App = () => {
  return (
    <Router>
      <Routes>

        {/* public routes */}
        <Route element={<PublicLayout />}> 
          <Route index element={<HomePage />} />
        </Route>
        

        {/* authentication routes */}
        <Route element={<AuthenticationLayout />}> 
          <Route path="/signin/*" element={<SignInPage/>} />
          <Route path="/signup/*" element={<SignUpPage/>} />
        </Route>


        {/* protected routes */}
        <Route element={<ProtectedRoutes> <MainLayout/> </ProtectedRoutes>}> 

        </Route>

      </Routes>
    </Router>
  )
}

export default App