import styled from "styled-components";
import { Drawer, IconButton } from "@mui/material";

export const SidebarContainer = styled(Drawer)<{ open: boolean }>`
  width: ${(props) => (props.open ? "240px" : "60px")};
  transition: width 0.3s;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${(props) => (props.open ? "240px" : "60px")};
    transition: width 0.3s;
    overflow-x: hidden;
  }
`;

export const ToggleButton = styled(IconButton)<{ open: boolean }>`
  position: fixed;
  top: 0px;
  left: ${(props) => (props.open ? "0px" : "20px")};
  transition: left 0.3s;
  color: #fff;
  z-index: 9999;
`;

export const ContentContainer = styled.div<{ open: boolean }>`
  margin-left: ${(props) => (props.open ? "240px" : "60px")};
  transition: margin-left 0.3s;
  padding: 16px;
`;
