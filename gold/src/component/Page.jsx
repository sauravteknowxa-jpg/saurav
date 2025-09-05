import Navbar from "./Navbar";
import { Outlet } from "react-router";

function Page(){
    return(
        <>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}
export default Page;