import { Outlet } from "react-router-dom"

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
        <img 
        src="/assets/img/bg.png" 
        className="absolute w-full h-full object-cover opacity-30"
        alt=""
        />
        <Outlet/>
    </div>    
  )
}

export default AuthenticationLayout;