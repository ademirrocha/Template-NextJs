import React from 'react';
import FooterComponent from "../Footer";
import HeaderComponent from "../Header";
import Sidebar from "../Sidebar"; // Certifique-se de que o Sidebar esteja sendo importado
import * as St from "./styles";

const LayoutComponent = ({ children }: any) => {
  return (
    <St.LayoutWrapper>
      <HeaderComponent />
      <St.ContentWrapper>
        <Sidebar />
        <St.MainContent>
          {children}
        </St.MainContent>
      </St.ContentWrapper>
      <FooterComponent />
    </St.LayoutWrapper>
  );
};

export default LayoutComponent;
