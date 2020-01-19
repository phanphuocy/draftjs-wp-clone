import React from "react";
import "./Header.scss";

// Import custom icon
import { MdVisibility } from "react-icons/md";
import { MdSettings } from "react-icons/md";

// Import custom components
import HeaderButton from "./HeaderButton/HeaderButton";
import HeaderHamburgerButton from "./HeaderHamburgerButton/HeaderHamburgerButton";
import AddPostButton from "./AddPostButton/AddPostButton";

const Header = () => {
  return (
    <header className="adminHeaderContainer">
      <div className="adminHeaderLeftNavigation">
        <HeaderHamburgerButton />
        <div className="navigation-button-wrap">
          <HeaderButton
            buttonName="Admin"
            buttonIcon={<MdSettings />}
            url="/admin/published"
          />
          <HeaderButton
            buttonName="Preview"
            buttonIcon={<MdVisibility />}
            url="/preview"
          />
        </div>
      </div>
      <AddPostButton buttonName="Viết" />
    </header>
  );
};

export default Header;
