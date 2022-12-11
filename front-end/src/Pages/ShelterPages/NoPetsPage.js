import React from "react";
import dogASCII from "../../assets/dogASCII.png";
import { useNavigate } from "react-router-dom";
import "./NoPetsPage.css"

export default function NoPetsPage() {
  const navigate = useNavigate();
  return (
    <div className="NoPetsPage_overall_div">
      <h3 className="text-center"> No Pets Found.</h3>
      <button
        className="NoPetsPage_button"
        onClick={() => navigate("/user/1/explore")}
      >
        Click Here to Explore Shelter Animals!
      </button>
      
      <br />
      <br />
      <img src={dogASCII} />
      <br />
      {/* <button>Add some</button> */}
    </div>
  );
}
