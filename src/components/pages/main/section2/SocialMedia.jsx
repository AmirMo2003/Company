
import {
    Avatar,
    Box,
    Tooltip,
    Typography,
    Zoom,
} from "@mui/material";
import { socialMedia } from "../../../../constants/index";
import { useInView } from "react-intersection-observer"


const SocialMedia = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    })

    return (
        <>
            <Box ref={ref} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Zoom in={inView}
                    direction="right"
                    style={{
                        transitionDelay: "200ms"
                    }} >
                    <Typography color="whitesmoke" sx={{
                        fontSize: {
                            xs: "1.8rem",
                            sm: "3rem"
                        },
                        textShadow: "2px 2px 5px black,-2px -2px 5px black "
                    }} className="text-log">! مارو دنبال کنید </Typography>
                </Zoom>

                <Box sx={{
                    mt: 5.5, display: "flex", gap: {
                        xs: "1rem",
                        sm: "4rem",
                        md: "5.5rem"
                    }
                }}>
                    {socialMedia && socialMedia.map((sm, index) => (
                        <Box className="lightning-effect">
                            <Tooltip title={sm.name}>
                                <Zoom in={inView}
                                    direction="left"
                                    style={{
                                        transitionDelay: `${index + 3}90ms`
                                    }}>
                                    <Avatar
                                        sx={{
                                            width: {
                                                xs: "6.5vh",
                                                md: '7.5vh'
                                            },
                                            height: {
                                                xs: "6.5vh",
                                                md: '7.5vh'
                                            },
                                            backgroundColor: `${sm.color}.main`,
                                            boxShadow: 10
                                        }} >
                                        <a href={sm.url} >
                                            {sm.icon}
                                        </a>
                                    </Avatar>
                                </Zoom>
                            </Tooltip>
                        </Box>
                    ))}
                </Box>
            </Box >

        </>
    )
}

export default SocialMedia