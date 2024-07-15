import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider } from "@mui/material";
import { Close, Home, Menu, Settings } from "@mui/icons-material";
import * as S from "./styles";

const Sidebar = ({ children }: any) => {
  const [open, setOpen] = useState(window.innerWidth >= 775);
  const [showToggleButton, setShowToggleButton] = useState(window.innerWidth >= 400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setShowToggleButton(false);
        setOpen(false);
      } else if (window.innerWidth < 775) {
        setShowToggleButton(true);
        setOpen(false);
      } else {
        setShowToggleButton(true);
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the width initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div>
      
      <S.SidebarContainer variant="permanent" open={open}>
        <List>
          <ListItem disablePadding>
            {open && <ListItemText primary="Next App" />}
            <S.ToggleButton onClick={handleToggle} open={open}>
              {open ? <Close /> : <Menu />}
            </S.ToggleButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              {open && <ListItemText primary="Home" />}
              <ListItemIcon>
                <Home />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              {open && <ListItemText primary="Settings" />}
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </S.SidebarContainer>
      <S.ContentContainer open={open}>
        {children}
      </S.ContentContainer>
    </div>
  );
};

export default Sidebar;
