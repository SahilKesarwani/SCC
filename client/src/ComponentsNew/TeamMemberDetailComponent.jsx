import React from "react";
import rahulAvatar from "../images/avatar/rahulAvatar.png";

export default function TeamMemberDetailComponent({src, name, designation, linkedIn, instagram}) {
  return (
    <>
      
        <div className="member">
          <img src={src} className="memberImage" />
          <div className="base"></div>
          <div className="designationBox">
            {name}
            <br />
            ({designation})
          </div>
          <div className="membeInfo">
            <h5>Social</h5>
            LinkedIn : <a href={linkedIn}>{linkedIn}</a><br/>
            Instagram : <a href={instagram}>{instagram}</a>
          </div>
        </div>
      
    </>
  );
}
