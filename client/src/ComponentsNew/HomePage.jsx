import React, { useEffect } from "react";
import Contents from "./Contents";
import CarouselArea from "./CarouselArea";
import DomainModal from "../Components/DomainModal";

export default function HomePage() {
  return (
    <>
      <Contents />
      <CarouselArea />
      <DomainModal title="I'm title"/>
    </>
  );
}
