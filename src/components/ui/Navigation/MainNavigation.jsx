import { useState } from "react";
import { NavLinks } from "@/components";
import MainHeader from "./MainHeader";
import Backdrop from "../BackDrop";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import "@/components/css/MainNavigatio.css";

export default function MainNavigation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav  ">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
