
import {
    Avatar,
    Box,
    Button,
    Slide,
    Typography,
    Zoom,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Business, Bolt } from "@mui/icons-material";
import { RandomReveal } from 'react-random-reveal';
import TextTransition, { presets } from 'react-text-transition';
import { alphabetPersian, textTransition } from "../../../../constants/index";
import bg from "../../../../assets/background.jpg";
import { useEffect, useState } from "react";


const Section1 = () => {


    // for transition text
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const startTransition = setInterval(() =>
            setIndex((index) => index + 1),
            3000);
        return () => clearTimeout(startTransition);
    }, [])


    return (
        <>
            <Slide direction="up" in>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box>
                        <Avatar src={bg} variant="rounded"
                            sx={{
                                width: "90%",
                                height: "100%",
                                borderRadius: 7,
                                mx: "auto",
                                ml: {

                                    md: "1rem"
                                },
                                mt: .5,
                                boxShadow: 20
                            }} />
                    </Box>
                </Grid>
            </Slide>
            <Slide in direction="down">
                <Grid size={{ xs: 12, md: 6 }} sx={{
                    display: "flex", alignItems: "center",
                    flexDirection: "column",
                    gap: 4.8,
                    justifyContent: "center",
                    mt: {
                        xs: 3,
                        md: -2
                    }
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography color="whitesmoke" sx={{
                            fontSize: {
                                xs: "2.2rem",
                                md: "3.8rem"
                            },

                            textShadow: "3px 5px black , 2px 2px 10px #606060",
                        }}>
                            <RandomReveal isPlaying
                                duration={3}
                                characters="شرکت فاواموج"
                                characterSet={alphabetPersian} />
                        </Typography>
                        <Typography color="whitesmoke" sx={{
                            fontSize: {
                                xs: "2.2rem",
                                md: "3rem"
                            },
                            textShadow: "3px 5px black , 2px 2px 10px #606060",
                        }}>
                            <RandomReveal isPlaying
                                duration={4}
                                characters="الکترونیک"
                                characterSet={alphabetPersian} />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="whitesmoke" sx={{
                            display: "flex", fontSize: {
                                xs: "1.5rem",
                                md: "2.5rem"
                            },
                            textShadow: "3px 4px #3c3c3c"
                        }}>
                            <TextTransition springConfig={presets.wobbly}>
                                {textTransition[index % textTransition.length]}
                            </TextTransition>
                            _#
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: "flex", gap: 3, width: 1, flexDirection: {
                            xs: "column",
                            md: "row"
                        }
                    }}>
                        <Zoom in style={{ transitionDelay: "300ms" }}>
                            <Button variant="contained"
                                color="warning"
                                sx={{
                                    py: 1.5,
                                    width: "100%",
                                    boxShadow: 7,
                                    borderRadius: 10,
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 1
                                }}>
                                <Typography variant="h6" color="dark" sx={{ fontWeight: 900 }}>
                                    ! بزن بریم
                                </Typography>
                                < Bolt sx={{ fontSize: "1.8rem", color: "black" }} />
                            </Button>
                        </Zoom>
                        <Zoom in style={{ transitionDelay: "400ms" }}>
                            <Button variant="outlined"
                                color="warning"
                                sx={{
                                    py: 1.5,
                                    width: "100%",
                                    boxShadow: 20,
                                    borderRadius: 10,
                                    backgroundColor: "#00000080",
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 1
                                }}>
                                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                    نمایندگی ها
                                </Typography>
                                <Business sx={{ fontSize: "1.8rem" }} />
                            </Button>
                        </Zoom>
                    </Box>
                </Grid>
            </Slide>
        </>
    )
}

export default Section1;