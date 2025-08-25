import {cn} from "@/lib/utils"
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {  

  const { userId }  = useAuth();

  return (
    <header className={cn("w-full border-b duration-150 ease-in-out py-1 px-1 ")}>
      <Container>
        <div className="flex items-center w-full gap-4 ">
          
          {/* logo */}
          <LogoContainer />

          {/* navigation */}
          <nav className={cn("hidden md:flex items-center gap-3")}>
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>

          {/* profile */}
          <div className="ml-auto flex item-center gap-6" />
          <ProfileContainer />

          {/* Mobile toggle section   */}
          <ToggleContainer />
        </div>
      </Container>
    </header>
  );
}

export default Header