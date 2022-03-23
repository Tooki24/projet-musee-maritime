import React from 'react';
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import NavbarView from "./NavbarView";

const Layout = () => {
    return (
        <>
          <Box sx={{pb:7}}>
            <Outlet/>
          </Box>
            <NavbarView/>
        </>
    );
};

export default Layout;