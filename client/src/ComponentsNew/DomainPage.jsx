import {useParams } from "react-router-dom";
import domainsApi from "../apis/domainCardApi";

export default function DomainPage(){
    const {domainName} = useParams();
    const myStyle={
        height:"100vh",
        width:"100vw",
        objectFit:"cover",
        position:"absolute",
        inset:"0",
        zIndex:"-1"

    };
    const myStyleH1={color:"white"};
    return(
        <>
        <h1 style={myStyleH1}><center>{domainName}</center></h1>
        {domainsApi.map((domains)=>{
            const {id, title, imgSrc, description} = domains;
            if(title===domainName){
           return  <div>
                {id}<br/>
                {title}<br/>
                <img src={imgSrc} style={myStyle}/><br/>
                {description}
            </div>
            }
        })}
        </>
    );
}