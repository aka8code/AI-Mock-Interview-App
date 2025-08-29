import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export const MainLayout = () => {  
    return(
        <div className="w-full ">   
            {/* handler to store user data */}
            <Header />

            <Container className="flex-grow">
                <main className="flex-grow ">
                    <Outlet />
                </main>
            </Container>

            <Footer />
        </div>
    );
}