import { Box, Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Helmet } from "react-helmet-async";
import Slick from "./Slick";

import baner from "../../../assets/COMPANY PROFILE.png"
import { Person } from "@mui/icons-material";

const About = () => {
    return (
        <>
            <Helmet>
                <title>
                    فاواموج | درباره ما
                </title>
            </Helmet>
            <Box sx={{ px: 3 }}>
                <Box sx={{
                    width: 1,
                    flexDirection: "column",
                    display: "flex",
                    gap: 10,
                }}>
                    <Grid container sx={{
                        display: "flex", flexWrap: {
                            xs: "none",
                            lg: "nowrap"
                        }, gap: 2
                    }}>
                        <Grid size={{
                            xs: 12,
                            lg: 9
                        }} sx={{ width: 1 }}>
                            <Grid>
                                <img src={baner} width={"100%"}
                                    style={{
                                        borderRadius: ".8rem", maxWidth: "100rem",
                                        minHeight: "8rem", maxHeight: "37vh", objectFit: "cover",
                                    }} alt="" />
                            </Grid>
                        </Grid>
                        <Grid size={{
                            xs: 12,
                            lg: 3
                        }} sx={{
                            display: "flex", flexDirection: {
                                xs: "row",
                                lg: "column"
                            }, gap: .5
                        }}>
                            <Grid size={6} sx={{ width: 1 }}>
                                <img src={baner} width={"100%"}
                                    style={{
                                        borderRadius: ".8rem", maxWidth: "100rem",
                                        maxHeight: "17.95vh",
                                        objectFit: "cover",
                                    }} alt="" />
                            </Grid>
                            <Grid size={6} sx={{ width: 1 }}>
                                <img src={baner} width={"100%"}
                                    style={{
                                        borderRadius: ".8rem", maxWidth: "100rem",
                                        maxHeight: "17.95vh",
                                        objectFit: "cover",
                                    }} alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider sx={{
                        pt: 4, "&::before , &::after": {
                            borderColor: "warning.main"
                        }
                    }}>
                        <Chip label={
                            <Typography color="black" sx={{ fontSize: "3vh" }}>
                                <Person sx={{
                                    fontSize: "5vh",
                                    color: "black",
                                    verticalAlign: "middle",
                                    pr: 1
                                }} />
                                ریاست ها
                            </Typography>
                        } variant="filled"
                            color="warning"
                            sx={{ px: "3vh", py: 4 }} />
                    </Divider>
                    <Slick />
                    <Divider sx={{
                        pt: 4, "&::before , &::after": {
                            borderColor: "warning.main"
                        }
                    }}>
                        <Chip label={
                            <Typography color="black" sx={{ fontSize: "3vh" }}>
                                <Person sx={{
                                    fontSize: "5vh",
                                    color: "black",
                                    verticalAlign: "middle",
                                    pr: 1
                                }} />
                                کارکنان
                            </Typography>
                        } variant="filled"
                            color="warning"
                            sx={{ px: "3vh", py: 4 }} />
                    </Divider>
                    <Slick />
                </Box>
            </Box>
        </>
    )
}

export default About