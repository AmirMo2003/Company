
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid2";
import { Copyright } from "@mui/icons-material";
import { img4, img5 } from "../../../assets/enum/index";


const LastFooter = () => {


    return (
        <>
            <Grid container sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "warning.main",
                backgroundColor: "black",
                pt: {
                    xs: -8,
                    sm: 0,
                    md: 8,
                },
                pb: "5vh"
            }}>
                <Grid size={{ xs: 12, md: 4 }} sx={{
                    justifyContent: "center",
                    display: {
                        xs: "none",
                        md: "flex"
                    }, alignItems: "center",
                    gap: 2
                }}>
                    <Typography>
                        Power by Asp.Net MVC
                    </Typography>
                    <img src={img5} width={"30px"}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{
                    textAlign: "center", pb: {
                        xs: 3, md: 0
                    },
                    pt: {
                        xs: 2,
                        md: .4
                    },
                }}>
                    <Typography sx={{
                        fontSize: ".9rem", pt: {
                            xs: 1,
                            md: 0
                        }
                    }}>
                        <Copyright sx={{ verticalAlign: "middle", mr: 1 }} />
                        کلیه حقوق متعلق به شرکت فاواموج الکترونیک میباشد
                    </Typography>

                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{
                    justifyContent: "center",
                    display: {
                        xs: "none",
                        md: "flex"
                    }, alignItems: "center",
                    gap: 2
                }}>
                    <Typography >
                        Power by REACT
                    </Typography>
                    <img src={img4} width={"28px"} />
                </Grid>
            </Grid>
        </>
    )
}

export default LastFooter