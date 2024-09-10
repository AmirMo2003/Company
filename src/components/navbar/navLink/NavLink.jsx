import { Box } from "@mui/material";
import MegaMenu from "../megaMenu/MegaMenu";
import {
    Reels,
    dataNavbar
} from "../../../constants/NavbarData";
import { useLocation } from "react-router-dom";


const NavLink = () => {



    // current Location
    const Location = useLocation();
    const route = Location.pathname;

    return (
        <Box sx={{
            gap: {
                md: 3,
                lg: 8
            },
            flexGrow: 8,
            justifyContent: "center"
        }}
            display={{
                xs: "none",
                md: "flex"
            }}>
            <MegaMenu buttonName="ارتباط با ما"
                options={Reels && Reels.items}
                link={Reels && Reels.links}
            />
            {dataNavbar && dataNavbar.map((ND, index) => (
                <a href={ND.links} key={index}>
                    <MegaMenu buttonName={ND.title}
                        active={route === ND.links ? true : false}
                        options={ND.items && ND.items[index]}
                    />
                </a>
            ))}
        </Box>
    )
}

export default NavLink