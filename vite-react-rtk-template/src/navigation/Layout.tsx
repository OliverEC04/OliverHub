import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Layout = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </Box>
    );
};