
import { Box, } from "@mui/material"
import FooterPc from "./pc/FooterPc";
import FooterMobile from "./mobile/FooterMobile";
import { DATAFOOTER } from "../../../constants/index";

const SwitchingFooter = () => {

  return (
    <>
      <Box sx={{
        display: {
          xs: "none",
          md: "block"
        },
      }}>
        <FooterPc DATAFOOTER={DATAFOOTER} />
      </Box>
      <Box sx={{
        display: {
          xs: "block",
          md: "none"
        }, mt: 5
      }}>
        <FooterMobile DATAFOOTER={DATAFOOTER} />
      </Box>
    </>
  )
}

export default SwitchingFooter