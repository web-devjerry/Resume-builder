import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";  

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className='fix'>
    <List sx={style} component="nav" aria-label="mailbox folders" >
      <ListItem button>
        <ListItemText primary="Inbox " onClick={()=>navigate("/resumebuild")} />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    </div>
    
  );
}