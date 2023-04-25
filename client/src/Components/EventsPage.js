import { useEffect, useRef } from "react";
const EventsPage =({navbar, title})=>{
    const outsideNavArea = useRef("");
    const applyStyling=()=>{
        const navbarHeight=navbar.current.offsetHeight;
        outsideNavArea.current.style.paddingTop=navbarHeight+"px";
    }
    useEffect(()=>{
        applyStyling();
    },[]);
    return(
        <>
        <div ref={outsideNavArea}></div>
        <p>Hello World {title}</p>
        </>
    )
}
export default EventsPage;