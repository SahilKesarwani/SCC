import React from "react";

export default function Error404() {
  return (
    <>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/error404BG.jpg"}
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Character.png"}
          className="error404Character"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Text2.png"}
          className="error404Character"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Text1.png"}
          className="error404Text"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/error404Text1Shadow.png"}
          className="error404TextShadow"
        />
      </div>
    </>
  );
}
