import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import "./Header.css";
import logo_cut from "./Pawster_logo_cut.png";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={()=> navigate(-1)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <AccountBoxIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}

      <Link to="/">
        <img className="header_logo" src={logo_cut} alt="logo cut" />
      </Link>

      <Link to="/chats">
        <IconButton>
          <SettingsApplicationsIcon fontSize="large" className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}
