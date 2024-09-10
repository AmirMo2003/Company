
import React from "react";
import Slider from "react-slick";

import bg from "../../../assets/background.jpg";
import bg2 from "../../../assets/b4b09fb6-1ace-4e0a-a456-69a79ea993c0.jpg"
import { Avatar, Box, Card, Typography } from "@mui/material";

const Slick = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // تغییر به سرعت دلخواه به میلی‌ثانیه  
        slickPlay: true
    };

    return (
        <Box sx={{ width: "78vw", mx: "auto", pt: 8, }}>
            <Slider {...settings}>

                <Card sx={{
                    backgroundColor: "transparent", py: 4,
                    width: 1, display: "flex"
                }}>
                    <Box sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-around",

                    }}>
                        <Box sx={{
                            display: "flex", flexDirection: "column", gap: 3,
                            backgroundColor: "warning.main", borderRadius: 8
                        }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="warning">
                                فلانی
                            </Typography>
                            <Typography color="warning">
                                مدرس
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", borderRadius: 3, flexDirection: "column", gap: 3, backgroundColor: "warning.main" }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="black">
                                فلانی
                            </Typography>
                            <Typography color="black">
                                برنامه نویس
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, backgroundColor: "warning.main" }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="black">
                                فلانی
                            </Typography>
                            <Typography color="black">
                                بازار یاب
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, backgroundColor: "warning.main" }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="black">
                                فلانی
                            </Typography>
                            <Typography color="black">
                                بازار یاب
                            </Typography>
                        </Box>
                    </Box>
                </Card>



                <Card sx={{
                    backgroundColor: "transparent", py: 4,
                    width: 1, display: "flex", borderRadius: 8
                }}>
                    <Box sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-around",

                    }}>
                        <Box sx={{
                            display: "flex", flexDirection: "column", gap: 3,
                            backgroundColor: "warning.main"
                        }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="warning">
                                فلانی
                            </Typography>
                            <Typography color="warning">
                                مدرس
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, backgroundColor: "warning.main" }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="black">
                                فلانی
                            </Typography>
                            <Typography color="black">
                                برنامه نویس
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, backgroundColor: "warning.main" }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="black">
                                فلانی
                            </Typography>
                            <Typography color="black">
                                بازار یاب
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, backgroundColor: "warning.main" }}>
                            <Avatar
                                src={bg}
                                sx={{ width: "15vw", height: "15vw", m: "auto", objectFit: "cover" }}
                                variant="rounded"
                            />
                            <Typography color="black">
                                فلانی
                            </Typography>
                            <Typography color="black">
                                بازار یاب
                            </Typography>
                        </Box>
                    </Box>
                </Card>

            </Slider>
        </Box >
    )
}

export default Slick