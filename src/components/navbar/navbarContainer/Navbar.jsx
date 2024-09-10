import { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    useScrollTrigger,
} from '@mui/material';

// components
import NavLink from "../navLink/NavLink";
import LogoAndMenu from "../logo&Menu/LogoAndMenu";
import CartButton from "../cartButton/CartButton";
import NavbarSearch from "../navbarSearch/NavbarSearch";
import Menu from "../menu/Menu";


const Navbar = () => {


    const [openDrawer, setOpenDrawer] = useState(false)

    const trigger = useScrollTrigger({
        threshold: 1,
        disableHysteresis: true
    });


    return (
        <>
            <Menu openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
            <AppBar sx={{
                backgroundColor: trigger ? "#00000073" : "transparent",
                backdropFilter: trigger ? "blur(20px)" : "none",
                transition: 'background-color 0.5s ease',
                borderRadius: 2,
                display: "flex",
                boxShadow: "none",
                p: 1,
                py: 2.5
            }}>
                <Toolbar>
                    <NavbarSearch />
                    <Box sx={{
                        flexGrow: .1,
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        gap: 5
                    }}>
                        {/* cart Button Shop */}
                        <CartButton />
                    </Box>
                    {/* NavLinks */}
                    <NavLink trigger={trigger} />
                    <Box sx={{
                        textAlign: "end",
                        flexGrow: {
                            xs: 1,
                            md: 3
                        },
                    }}>
                        {/* logo and menuIcon */}
                        <LogoAndMenu setOpenDrawer={setOpenDrawer} />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar