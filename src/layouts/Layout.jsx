import { Box } from "@mui/material";
import ScrollTop from "../common/FabsScroll/ScrollTop";
import ScroolBottom from "../common/FabsScroll/ScroolBottom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbarContainer/Navbar";
import Supports from "../helpers/Supports/Supports";


const Layout = ({ children }) => {


    return (
        <>
            {/* scroll Locator button */}
            <ScroolBottom />
            <Navbar />
            <Box sx={{
                mt: { xs: "20vh", md: "28vh", xl: "24vh" }
            }}>
                {children}
            </Box>
            <Footer />
            {/* scroll to top */}
            <ScrollTop />
            <Supports />
        </>

    )
}

export default Layout;