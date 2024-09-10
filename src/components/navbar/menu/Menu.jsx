import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import DrawerNavbar from '../../../helpers/drawer/DrawerNavbar'
import { Home } from "@mui/icons-material";
import { dataNavbar } from "../../../constants/NavbarData";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ openDrawer, setOpenDrawer }) => {


    // current Location
    const Location = useLocation();
    const route = Location.pathname;

    // close when select Links

    const handleClose = () => setOpenDrawer(false);

    return (
        <>
            <DrawerNavbar openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer} >
                <Box sx={{ mt: 2 }}>
                    {dataNavbar && dataNavbar.map((nd, index) => (
                        <Zoom in style={{
                            transitionDelay: "210ms"
                        }}>
                            <Box key={index} sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Link to={nd.links} onClick={handleClose}>
                                    <Typography variant="body1"
                                        sx={{
                                            backgroundColor: index === 3 ? "orange" : "null",
                                            borderRadius: 10,
                                            width: index === 3 ? 1 / 2 : 1,
                                            mx: "auto",
                                            mt: index === 3 ? 3 : 2.5,
                                            py: 1,
                                            color: index === 3 ? "black" :
                                                route === nd.links ?
                                                    "whitesmoke" :
                                                    "warning.main"
                                        }}>
                                        {index === 3 ?
                                            <Tooltip title="home">
                                                <Home sx={{
                                                    verticalAlign: "middle",
                                                    fontSize: "2rem"
                                                }} />
                                            </Tooltip>
                                            : nd.title}
                                    </Typography>
                                </Link>
                            </Box>
                        </Zoom>

                    ))}
                </Box>
            </DrawerNavbar>
        </>
    )
}

export default Menu