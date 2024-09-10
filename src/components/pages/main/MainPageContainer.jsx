
import { Box, Chip, Divider, Typography, useMediaQuery } from "@mui/material";
import Grid from '@mui/material/Grid2';
// components
import Section1 from "./section1/Section1";
import SocialMedia from "./section2/SocialMedia";
import ShowTags from "./section3/ShowTags";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const MainPageContainer = () => {

    // responsive
    const animationsSmall = useMediaQuery('(max-width:600px)')


    // animations
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: animationsSmall ? .03 : .19
    })

    return (
        <>
            <Helmet>
                <title>
                    شرکت فاوا موج الکترونیک
                </title>
            </Helmet>
            <Box sx={{
                background: "transparent",
                mx: 3,
            }}>
                <Grid container
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}>
                    {/* Section1 (image and introduction Company) */}
                    <Section1 />
                </Grid>
                <Grid sx={{ mt: { xs: 11, md: 19 } }}>
                    {/* show socailMedia and animations */}
                    <SocialMedia />
                </Grid>
                <Grid container>
                    <Divider sx={{
                        mt: {
                            xs: 18,
                            md: 29
                        }, "&::before , &::after": {
                            border: "2px dashed #ec8d10"
                        }, width: 1,
                    }}>
                        <Chip variant="filled" label={
                            <Typography color="warning" sx={{
                                fontSize: {
                                    xs: "1rem",
                                    md: "2.5rem"
                                },
                                textShadow: "1.5px 1.5px 2px grey"
                            }}>
                                🧐 شرکت ما چه خدماتی رو ارائه میده؟ 🧐
                            </Typography>
                        } sx={{
                            py: {
                                xs: "6vw",
                                md: "3.5rem"
                            }, backgroundColor: "black", boxShadow: 10
                        }} />
                    </Divider>

                </Grid>
                <Grid container ref={ref} sx={{
                    mt: 10,
                    px: 2,
                    borderRadius: 8, display: "flex",
                    justifyContent: "space-around",
                }}>
                    <ShowTags inView={inView} />
                </Grid>
            </Box>
        </>
    )
}

export default MainPageContainer;