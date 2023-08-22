import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export const Meteorites3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/IqiMMBnE2rfmHIyF/scene.splinecode");
    }
  }, [canvasRef]);

  return (
    <div
      className="absolute"
      style={{ width: "15em", height: "15em", opacity: ".5", zIndex: "-1" }}
    >
      <canvas id="canvas3d" style={{ zIndex: "-1" }} ref={canvasRef}></canvas>
    </div>
  );
};
