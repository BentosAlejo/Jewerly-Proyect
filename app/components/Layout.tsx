import { Box, Typography } from "@mui/material"
import HomePage from "./Home/HomePage"
import Jewels from "./Jewels"
import Contact from "./Contact"
import Deliverys from "./Deliverys"
import Custom from "./Custom"
import Questions from "./Questions"




const Layout = () => {

    return(
        <>
            <HomePage/>
            <Jewels/>
            <Contact/>
            <Deliverys/>
            <Custom/>
            <Questions/>
        </>
    )

}


export default Layout