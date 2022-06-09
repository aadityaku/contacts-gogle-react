import {AppBar,IconButton,Toolbar, Typography,InputBase, Divider, Paper, Avatar} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from "./logo.png";
import { Box } from "@mui/system";
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
export default function Header(){
    const [head,setHead] = useState(false);
    return (
        <AppBar position="sticky" sx={{backgroundColor:"white"}} elevation="1" >
            <Toolbar>
                <IconButton  size="large" edge="start"  aria-label="open drawer"  >
                    <MenuIcon/>
                
                </IconButton>
                <Box  component="img" sx={{height: 40.5,marginLeft:1,width: 40.5,maxHeight: { xs: 233, md: 167 },maxWidth: { xs: 350, md: 250 },}}
                alt="The house from the offer."
                src={logo}
                />

                <Typography variant="h6" color="black" sx={{marginLeft:1,fontSize:24,fontFamily:"sans-serif"}} >Contact</Typography>
                {
                    head &&  <Paper component="form" sx={{ p: '3px 10px',display:"flex", alignItems: 'center', marginLeft:11, width: 690,borderRadius:2}}>
                        
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                <InputBase onClick={() => setHead(true)} sx={{ ml: 1, flex: 1 }} placeholder="Search Google Contacts" inputProps={{ 'aria-label': 'search google maps' }}/>
     
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    </Paper>
                }
                {
                    !head && <Paper component="form" sx={{ p: '3px 10px',display:"flex", alignItems: 'center', marginLeft:11, width: 690,borderRadius:2  ,backgroundColor:"#eeeeee"}}>
           
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                <InputBase onClick={() => setHead(true)} sx={{ ml: 1, flex: 1 }} placeholder="Search Google Contacts" inputProps={{ 'aria-label': 'search google maps' }}/>
     
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
                }
                <Typography sx={{color:"black",flex:6, display:"flex", justifyContent:"flex-end",alignItems:"flex-end"}}><HelpOutlineIcon /></Typography>
                <Typography sx={{color:"black",flex:1, display:"flex", justifyContent:"flex-end",alignItems:"flex-end"}}><SettingsIcon/></Typography>
                <Typography sx={{color:"black",flex:1.2, display:"flex", justifyContent:"flex-end",alignItems:"flex-end"}}><AppsIcon/></Typography>
                <Typography sx={{color:"black",flex:1, display:"flex", justifyContent:"flex-end",alignItems:"flex-end"}}><Avatar alt="Remy Sharp"  src="https://images.statusfacebook.com/profile_pictures/stylish-boys/boys-profile-pics-456.jpg" /></Typography>
                

            </Toolbar>
        </AppBar>
       
    )
}