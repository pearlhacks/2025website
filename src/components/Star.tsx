"use client";

import React, { useEffect, useRef } from "react";

// Define the Circle class
class Circle {
  private s = {
    ttl: 8000,
    xmax: 5,
    ymax: 2,
    rmax: 10,
    rt: 1,
    xdef: 960,
    ydef: 540,
    xdrift: 4,
    ydrift: 4,
    random: true,
    blink: true,
  };

  private x = 0;
  private y = 0;
  private r = 0;
  private dx = 0;
  private dy = 0;
  private hl = 0;
  private rt = 0;
  private stop = 0;

  constructor(
    private WIDTH: number,
    private HEIGHT: number,
    private rint: number
  ) {
    this.reset();
  }

  reset = () => {
    this.x = this.s.random ? this.WIDTH * Math.random() : this.s.xdef;
    this.y = this.s.random ? this.HEIGHT * Math.random() : this.s.ydef;
    this.r = (this.s.rmax - 1) * Math.random() + 1;
    this.dx = Math.random() * this.s.xmax * (Math.random() < 0.5 ? -1 : 1);
    this.dy = Math.random() * this.s.ymax * (Math.random() < 0.5 ? -1 : 1);
    this.hl = (this.s.ttl / this.rint) * (this.r / this.s.rmax);
    this.rt = Math.random() * this.hl;
    this.s.rt = Math.random() + 1;
    this.stop = Math.random() * 0.2 + 0.4;
    this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
  };

  fade = () => {
    this.rt += this.s.rt;
  };

  draw = (context: CanvasRenderingContext2D, gradient: CanvasGradient) => {
    if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) {
      this.s.rt *= -1;
    } else if (this.rt >= this.hl) {
      this.reset();
    }

    const newo = 1 - this.rt / this.hl;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    context.closePath();

    const cr = this.r * newo;
    gradient = context.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      cr <= 0 ? 1 : cr
    );
    gradient.addColorStop(0.0, `rgba(255, 255, 224, ${newo})`);
    gradient.addColorStop(this.stop, `rgba(255, 255, 224, ${newo * 0.2})`);
    gradient.addColorStop(1.0, "rgba(255, 255, 224, 0)");

    context.fillStyle = gradient;
    context.fill();
  };

  move = (WIDTH: number, HEIGHT: number) => {
    this.x += (this.rt / this.hl) * this.dx;
    this.y += (this.rt / this.hl) * this.dy;

    if (this.x > WIDTH || this.x < 0) this.dx *= -1;
    if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
  };
}

// React functional component
const StarsOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rint = 50;
  let stars: Circle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      // Create stars
      stars = Array.from(
        { length: rint },
        () => new Circle(WIDTH, HEIGHT, rint)
      );
    };

    // Set canvas size to full screen initially and on resize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Draw loop
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.fade();
        star.move(canvas.width, canvas.height);
        let gradient = context.createRadialGradient(0, 0, 0, 0, 0, 0); // Placeholder for gradient
        star.draw(context, gradient);
      });
    };

    const intervalId = setInterval(draw, rint);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [rint]);

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default StarsOverlay;
