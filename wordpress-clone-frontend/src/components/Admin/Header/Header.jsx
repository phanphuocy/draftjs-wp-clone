import React from 'react';
import "./Header.scss";

// Import custom components
import HeaderButton from "./HeaderButton/HeaderButton";
import AddPostButton from "./AddPostButton/AddPostButton";

const Header = () => {
    return (
        <div className="adminHeaderContainer">
           <div>
               <HeaderButton buttonName="Admin" />
               <HeaderButton buttonName="Preview" />

           </div>
           <AddPostButton buttonName="Viết" />
        </div>
    )
}

export default Header;
