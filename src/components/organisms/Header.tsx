import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className="flex justify-center">
                <AccessTimeIcon fontSize="large" className="mr-2" />
                    <Typography variant="h5">
                        健康寿命タイマー
                    </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;