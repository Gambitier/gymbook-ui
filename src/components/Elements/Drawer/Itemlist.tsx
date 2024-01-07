import { GridView } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

export const MainListItems = (
  <React.Fragment>
    <ListItemButton href='plans' >
      <ListItemIcon>
        <GridView />
      </ListItemIcon>
      <ListItemText primary="Plan" />
    </ListItemButton>
  </React.Fragment>
);
