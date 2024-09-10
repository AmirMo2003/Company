import { ShoppingCartOutlined } from "@mui/icons-material";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";




const CartButton = () => {
    return (
        <>
            <a href='/shop'>
                <Tooltip title="shop">
                    <Button variant='contained'
                        sx={{
                            borderRadius: 10,
                            backgroundColor: "warning.main",
                            boxShadow: {
                                xs: 0,
                                lg: 10
                            },
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        }}>
                        <Avatar
                            className="cart-icon"
                            sx={{
                                ml: {
                                    sm: -1,
                                    md: -1
                                }, mr: {
                                    sm: 1,
                                    md: 1.5
                                },
                                backgroundColor: {
                                    xs: "warning.main",
                                    sm: "black"
                                }
                            }}>
                            <ShoppingCartOutlined sx={{
                                color: {
                                    xs: "black",
                                    sm: "warning.main"
                                }
                            }} />
                        </Avatar>
                        <Typography color="black" variant="subtitle1" sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            },
                            fontWeight: 900,
                        }}>
                            فروشگاه
                        </Typography>
                    </Button>
                </Tooltip>
            </a>
        </>
    )
}

export default CartButton;