import React from 'react';
import '../../assets/style/NavbarView.css'
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {Collections, Cottage, Sailing} from "@mui/icons-material";
import {Link} from "react-router-dom";


const NavbarView = () => {
    const [value, setValue] = React.useState(0)
    return (

            <BottomNavigation
                sx={{ bgcolor: 'secondary.main', color: 'primary.contrastText', p: 2 }}
                showLabels
                value={value}
                id="navBar"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                    <BottomNavigationAction component={Link} to="/"  icon={<Cottage/>}/>
                    <BottomNavigationAction component={Link} to="/navires" icon={<Sailing/>}/>
                    <BottomNavigationAction component={Link} to="/gallery" icon={<Collections/>}/>
            </BottomNavigation>

    );
};

export default NavbarView;