import React from "react";

// Import custom icons
import { MdMenu } from "react-icons/md";
import { MdCropSquare } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { MdSettings } from "react-icons/md";

// Import custom style
import "./HeaderHamburgerButton.scss";

const HeaderHamburgerButton = props => {
  return (
    <React.Fragment>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <MdMenu className="openState" />
          <MdCropSquare className="closeState" />
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <MdSettings />
                  <a href="#">Admin</a>
                </li>
                <li>
                  <MdVisibility />
                  <a href="#">Preview</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderHamburgerButton;
