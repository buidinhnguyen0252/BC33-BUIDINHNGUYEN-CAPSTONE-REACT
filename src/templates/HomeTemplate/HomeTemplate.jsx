import React from "react";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";
import "../../assets/scss/pages/_home.scss";
import FooterHome from "../../Components/FooterHome/FooterHome";
export default function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <div style={{ minHeight: 1000 }}>
        <Outlet></Outlet>
      </div>

      <FooterHome />
    </div>
  );
}
