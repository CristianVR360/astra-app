import React from "react";

const FullscreenIframe = () => {
  return (
    <div
      id="container"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.milanding.cl/astra360"
        title="Descripción"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default FullscreenIframe;
