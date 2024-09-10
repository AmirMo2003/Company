

import { useEffect, useRef } from 'react';
import { Box, IconButton, Tooltip, } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchInput = () => {

    // auto focus
    const input = useRef(null);

    useEffect(() => {
        input.current.focus();
    })

    const InputStyle = {
        width: "80%",
        color: "orange",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        direction: "rtl",
        padding: "1.1rem",
        fontSize: "1rem",
        fontFamily: "Vazir",
        marginRight: ".7rem",
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Tooltip title="search">
                <IconButton sx={{
                    ml: {
                        xs: 1,
                        md: 2.5
                    }
                }}>
                    <Search sx={{
                        fontSize: "2.3rem",
                        my: "auto",
                        color: "warning.main"
                    }} />
                </IconButton>
            </Tooltip>
            <input style={InputStyle} ref={input}
                placeholder="جستجو کنید ..." />
        </Box>
    )
}

export default SearchInput;