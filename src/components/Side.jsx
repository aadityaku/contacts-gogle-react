import { Divider, List, ListItemButton, ListItemText} from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockResetIcon from '@mui/icons-material/LockReset';
import AssistantIcon from '@mui/icons-material/Assistant';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import PrintIcon from '@mui/icons-material/Print';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Side = (props) => {
  
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [select,setSelect] = useState(false);
    
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    const arro = (event,index) =>{
            setSelectedIndex(index);
            setSelect(true);
    }
    const arroFalse = (event,index) =>{
            setSelectedIndex(index);
            setSelect(false);
    }
   
    return (
      <Box sx={{ maxWidth: 350, bgcolor: 'background.paper' }} position="fixed">
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)} sx={{borderWidth:1,borderRadius:50,margin:1, marginRight:8, backgroundColor:"#eeeeee"}}>
            <ListItemIcon>
              <AddIcon sx={{marginLeft:1}}/>
            </ListItemIcon>
            <ListItemText primary="Create contacts"   />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 1}   onClick={(event) => handleListItemClick(event, 1)} sx={{fontSize:4,borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
            <ListItemIcon>
              <PersonOutlineIcon sx={{marginLeft:3}} />
            </ListItemIcon>
            <ListItemText primary="Contacts"/>
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
            <ListItemIcon>
              <LockResetIcon sx={{marginLeft:3}}/>
            </ListItemIcon>
            <ListItemText primary="Frequently contacted" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
            <ListItemIcon>
              <AssistantIcon sx={{marginLeft:3}} />
            </ListItemIcon>
            <ListItemText primary="Merge & fix" />
          </ListItemButton>
        </List>
        <Divider />
        {
          !select && <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton  selected={selectedIndex === 5} onClick={(event) => arro(event, 5)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
            <ListItemIcon>
                <KeyboardArrowDownIcon sx={{marginLeft:3}} />
            </ListItemIcon>
            <ListItemText primary="Labels" />
          </ListItemButton>
        
          </List>
        }
          {
            select && <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton selected={selectedIndex === 5} onClick={(event) => arroFalse(event, 5)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
              <ListItemIcon>
                  <KeyboardArrowUpIcon sx={{marginLeft:3}}/>
              </ListItemIcon>
              <ListItemText primary="Labels" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 6} onClick={(event) => handleListItemClick(event, 6)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
              <ListItemIcon>
                <AddIcon sx={{marginLeft:3}}/>
              </ListItemIcon>
              <ListItemText primary="Create label" />
            </ListItemButton>
            </List>
          }
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton selected={selectedIndex === 7} onClick={(event) => handleListItemClick(event, 7)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
            <ListItemIcon>
              <FileUploadOutlinedIcon sx={{marginLeft:3}}/>
            </ListItemIcon>
            <ListItemText primary="Import" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 8} onClick={(event) => handleListItemClick(event, 8)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50,padding:1}}>
            <ListItemIcon>
              <BackupOutlinedIcon sx={{marginLeft:3}}/>
            </ListItemIcon>
            <ListItemText primary="Export" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 9} onClick={(event) => handleListItemClick(event, 9)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50}}>
            <ListItemIcon>
              <PrintIcon sx={{marginLeft:2}}/>
            </ListItemIcon>
            <ListItemText primary="Print" />
          </ListItemButton>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton selected={selectedIndex === 10} onClick={(event) => handleListItemClick(event, 10)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50}}>
            <ListItemIcon>
              <UploadFileOutlinedIcon sx={{marginLeft:2}}/>
            </ListItemIcon>
            <ListItemText primary="Other contacts" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 11} onClick={(event) => handleListItemClick(event, 11)} sx={{borderTopRightRadius:50,borderBottomRightRadius:50}}>
            <ListItemIcon>
              <DeleteForeverRoundedIcon sx={{marginLeft:2}}/>
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItemButton>
          
        </List>
        <Divider />
      </Box>
    );
  
}
export default Side;









