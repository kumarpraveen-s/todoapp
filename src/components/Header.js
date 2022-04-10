import React from "react";
import "./header.css";
import HighlightIcon from "@mui/icons-material/Highlight";
const Header = () => {
  return (
    <div className="header">
      <HighlightIcon className="icon" />
      <h1 className="header-heading">TodoApp</h1>
    </div>
  );
};

export default Header;
