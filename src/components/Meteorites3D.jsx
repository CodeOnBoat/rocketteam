import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export const Meteorites3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/e6UpFYoS7GqAbZnT/scene.splinecode");
    }
  }, [canvasRef]);

  return (
    <canvas
      id="canvas3d"
      className="absolute -z-10"
      style={{ left: "20%" }}
      ref={canvasRef}
    ></canvas>
  );
};
