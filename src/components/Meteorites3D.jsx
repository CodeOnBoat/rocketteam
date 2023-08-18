import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export const Meteorites3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/KQfwyC7-VcyqfZM8/scene.splinecode");
    }
  }, [canvasRef]);

  return <canvas id="canvas3d" ref={canvasRef}></canvas>;
};
