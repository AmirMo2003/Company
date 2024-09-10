

import {
    Box,
    Fab,
    useMediaQuery,
    useScrollTrigger
} from '@mui/material';
import {
    KeyboardArrowDown
} from '@mui/icons-material';
import { useEffect, useState } from 'react';


const ScrollTop = () => {


    // for height > 300px
    const [show, setShow] = useState();

    // off when scroll
    const trigger = useScrollTrigger({
        triggerOnce: true,
        threshold: 1,
        disableHysteresis: true
    });

    // height Screen 
    const heightScreen = document.documentElement.scrollHeight;

    // once render
    useEffect(() => {
        if (heightScreen >= 2000) {
            return setShow(true)
        } else {
            return setShow(false)
        }
    }, [heightScreen])


    // responsive
    const XSThunk = useMediaQuery('(max-width : 500px)')



    return (
        <>
            <Box sx={{
                display: show && !XSThunk ? "block" : "none"
            }}>
                <Fab size="medium" className="scrollBottom"
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '48%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'warning.main',
                        borderRadius: '50%',
                        display: trigger ? "none" : "block"
                    }}
                    onClick={() =>
                        window.scrollTo({ top: 320, behavior: 'smooth' })}>
                    <KeyboardArrowDown sx={{ verticalAlign: "middle" }} />
                </Fab>
            </Box>
        </>
    )
}

export default ScrollTop