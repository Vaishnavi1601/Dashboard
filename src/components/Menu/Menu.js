import React from 'react';
import { Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import downArrow from "../../icons8-down-arrow-16 (1).png";
import dashboard from "../../icons8-dashboard-24.png"
import assets from "../../icons8-graph-24.png";
import incidents from "../../icons8-tools-24.png";
import service from "../../icons8-settings-24.png"
import req from "../../icons8-message-24.png"
import user from "../../icons8-users-24.png"
import report from "../../icons8-reports-24.png"
import contact from "../../icons8-headset-24.png"
import logout from "../../icons8-logout-24.png"
import icon from "../../vajra.png"

const MenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
}));

const MenuItems = styled(List)(({ theme }) => ({
  flex: 1, 
}));

const MenuButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
}));

const MenuItemText = styled(ListItemText)(({ theme, isActive }) => ({
  color: isActive ? 'white' : theme.palette.text.primary,
  fontWeight: isActive ? 'bold' : 'normal',
  marginLeft: "30px"
}));

const Menu = () => {
  return (
    <div style={{width: "259px", backgroundColor:"#1B2535", height:"100vh"}}>
    <MenuContainer style={{paddingTop:"5px"}}>
    <img src={icon} alt="Down Arrow" />
      <MenuItems>
      
        <ListItem >
        <img src={dashboard} alt="Down Arrow" />
          <MenuItemText isActive primary="Dashboard" />
        </ListItem>
        <ListItem >
        <img src={assets  } alt="Down Arrow" />
          <MenuItemText isActive  primary="Assets" />
          <img src={downArrow} alt="Down Arrow" />
        </ListItem>
        <ListItem >
        <img src={incidents} alt="Down Arrow" />
          <MenuItemText isActive  primary="Incidents" />
        </ListItem>
        <ListItem >
        <img src={service} alt="Down Arrow" />
          <MenuItemText isActive  primary="Service" />
        </ListItem>
        <ListItem >
        <img src={req} alt="Down Arrow" />
          <MenuItemText isActive  primary="Request" />
        </ListItem>
        <ListItem >
        <img src={user} alt="Down Arrow" />
          <MenuItemText isActive  primary="User" />
          <img src={downArrow} alt="Down Arrow" />
        </ListItem>
        <ListItem >
        <img src={report} alt="Down Arrow" />
          <MenuItemText isActive  primary="Report"/>
          <img src={downArrow} alt="Down Arrow" />
        </ListItem>
      </MenuItems>
      <Divider />
      <MenuButton variant="contained" fullWidth style={{borderRadius:"50px", backgroundColor:"transparent", borderColor:"white",justifyContent:"space-evenly", fontWeight:"bold"}}>
      <img src={contact} alt="Down Arrow" />
        Contact Us
      </MenuButton>
      <MenuButton variant="contained" fullWidth style={{borderRadius:"50px", backgroundColor:"transparent",justifyContent:"space-evenly", fontWeight:"bold"}}>
      <img src={logout} alt="Down Arrow" />
        Logout
      </MenuButton>
    </MenuContainer>
    </div>
  );
}

export default Menu;
