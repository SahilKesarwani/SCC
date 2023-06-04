import React from "react";
import TeamMemberDetailComponent from "./TeamMemberDetailComponent";
import rahulAvatar from "../images/avatar/rahulAvatar.png";
import gauriAvatar from "../images/avatar/gauriAvatar.png";

export default function OurTeamPage() {
  return (
    <>
      <div className="teamMemberBox">
        <TeamMemberDetailComponent src={gauriAvatar} name={"Gauri Gupta"} designation={"Event Manager"} linkedIn={"linkedIn"} instagram={"instagram"}/>
     <TeamMemberDetailComponent src={rahulAvatar} name={"Rahul Singh"} designation={"Vice-President"} linkedIn={"linkedIn"} instagram={"instagram"}/> 
        <TeamMemberDetailComponent src={gauriAvatar} name={"Anjali"} designation={"Public Relation Lead"} linkedIn={"linkedIn"} instagram={"instagram"}/>
        <TeamMemberDetailComponent src={rahulAvatar} name={"Ayush Prakash"} designation={"Technical Head"} linkedIn={"linkedIn"} instagram={"instagram"}/> 
        </div>
        <div className="teamMemberBox">
        <TeamMemberDetailComponent src={gauriAvatar} name={"Pragya Yadav"} designation={"Content Lead"} linkedIn={"linked"} instagram={"instagram"}/>
        <TeamMemberDetailComponent src={rahulAvatar} name={"Utkarsh Pratap Singh"} designation={"Social Media Team"} linkedIn={"linked"} instagram={"instagram"}/>
        <TeamMemberDetailComponent src={gauriAvatar} name={"Swarna Singh"} designation={"Social Media Team"} linkedIn={"linked"} instagram={"instagram"}/>
        <TeamMemberDetailComponent src={rahulAvatar} name={"Harshit"} designation={"Competitive Programming Lead"} linkedIn={"linked"} instagram={"instagram"}/>
        <TeamMemberDetailComponent src={gauriAvatar} name={"Shivangi Maurya"} designation={"Competitive Programming Lead"} linkedIn={"linked"} instagram={"instagram"}/>

        
      </div>
    </>
  );
}
