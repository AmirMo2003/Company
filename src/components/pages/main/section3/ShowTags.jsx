
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Typography,
    Zoom
} from '@mui/material'
import Grid from "@mui/material/Grid2";
import { dataTags } from "../../../../constants"
import { NorthWest } from '@mui/icons-material';


const ShowTags = ({ inView }) => {

    return (
        <>
            {dataTags && dataTags.map((dt, index) => (

                <Zoom in={inView} style={{
                    transitionDelay: `${index + 3}90ms`
                }}>
                    <Grid size={{ xs: 12, md: 4, }} sx={{ mt: 3, }}>

                        <Card sx={{
                            mx: {
                                xs: -1,
                                md: 1
                            },
                            textAlign: "center", backgroundColor: "black",
                            borderRadius: 6,
                            // boxShadow: "2px 2px 8px orange , -.5px -.5px 1px #fcb724"
                            border: "1px solid #ec8d10",
                            boxShadow: 12
                        }} >
                            <CardMedia sx={{ mb: 2 }}>
                                {dt.icon}
                            </CardMedia>
                            <Divider sx={{ color: "red" }} />
                            <CardContent>
                                <Divider sx={{
                                    "&::before , &::after": {
                                        borderColor: "orange"
                                    },
                                }}>
                                    <Chip variant="filled" color='warning' label={
                                        <Typography sx={{ fontSize: "2vh" }}
                                            color="black"
                                        >
                                            {dt.title}
                                        </Typography>
                                    } sx={{
                                        boxShadow: "1px 1px 2px orange"
                                    }} />
                                </Divider>

                                < Typography color="whitesmoke" sx={{ mt: 3.5, wordBreak: "inherit" }} variant='body2'>
                                    {dt.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' color="warning"
                                    sx={{
                                        mx: "auto", mb: 1, boxShadow: 10, px: {
                                            xs: 2,
                                            md: "none"
                                        },
                                        border: "1px solid orange",
                                        borderRadius: 8
                                    }}>
                                    <a href={dt.url}>
                                        <Typography color="warning.main" >
                                            <NorthWest sx={{ verticalAlign: "middle" }} />
                                            {dt.name ? (` "ورود به فروشگاه " ${dt.name} `) :
                                                (" مشاهده سایت برنامه‌نویس ")}
                                        </Typography>
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                </Zoom>

            ))}

        </>
    )
}

export default ShowTags