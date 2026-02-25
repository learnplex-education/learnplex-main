"use client";

/**
 * PlexBackground — Static node-graph; mouse-only magnetic reactivity.
 * Indigo-500/40 lines, indigo-400/70 on hover for high visibility on dark slate.
 */

import { useCallback, useEffect, useRef, useState } from "react";

const NODE_COUNT = 38;
const TOP_RIGHT_COUNT = 12;
const TOP_EDGE_COUNT = 6;
const CONNECT_DISTANCE = 150;
const MOUSE_RADIUS = 200;
const MAGNET_STRENGTH = 0.032;
const SPRING_BACK = 0.02;
const NODE_RADIUS = 2.5;
const LINE_OPACITY_BASE = 0.4;
const LINE_OPACITY_ACTIVE = 0.7;
const NODE_OPACITY_BASE = 0.35;
const NODE_OPACITY_ACTIVE = 0.7;

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
};

export default function PlexBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);

  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const halfW = width * 0.5;
    const halfH = height * 0.5;
    const topStrip = height * 0.2;

    for (let i = 0; i < NODE_COUNT; i++) {
      let x: number;
      let y: number;
      if (i < TOP_EDGE_COUNT) {
        x = halfW + Math.random() * halfW;
        y = Math.random() * topStrip;
      } else if (i < TOP_EDGE_COUNT + TOP_RIGHT_COUNT) {
        x = halfW + Math.random() * halfW;
        y = Math.random() * halfH;
      } else {
        x = Math.random() * width;
        y = Math.random() * height;
      }
      nodes.push({
        x,
        y,
        vx: 0,
        vy: 0,
        baseX: x,
        baseY: y,
      });
    }
    return nodes;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let animationId: number;
    let width = 0;
    let height = 0;

    const setSize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      if (width > 0 && height > 0) {
        if (nodesRef.current.length === 0) nodesRef.current = initNodes(width, height);
        else {
          nodesRef.current.forEach((n) => {
            n.x = Math.min(width, Math.max(0, n.x));
            n.y = Math.min(height, Math.max(0, n.y));
            n.baseX = n.x;
            n.baseY = n.y;
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      if (!ctx || width <= 0 || height <= 0) return;
      const context = ctx;
      context.clearRect(0, 0, width, height);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MAGNET_STRENGTH;
          n.vx += (dx / dist) * force * 50;
          n.vy += (dy / dist) * force * 50;
        }
        n.vx += (n.baseX - n.x) * SPRING_BACK;
        n.vy += (n.baseY - n.y) * SPRING_BACK;
        n.vx *= 0.9;
        n.vy *= 0.9;
        n.x += n.vx;
        n.y += n.vy;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      context.lineWidth = 1;
      const distToMouse = (nx: number, ny: number) => {
        const lx = mouse.x - nx;
        const ly = mouse.y - ny;
        return Math.sqrt(lx * lx + ly * ly);
      };
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DISTANCE) {
            const nearA = distToMouse(a.x, a.y) < MOUSE_RADIUS;
            const nearB = distToMouse(b.x, b.y) < MOUSE_RADIUS;
            const active = nearA || nearB;
            const opacity = active ? LINE_OPACITY_ACTIVE : LINE_OPACITY_BASE;
            context.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRadius = dist < MOUSE_RADIUS;
        context.beginPath();
        context.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
        if (inRadius) {
          context.fillStyle = `rgba(129, 140, 248, ${NODE_OPACITY_ACTIVE})`;
        } else {
          context.fillStyle = `rgba(148, 163, 184, ${NODE_OPACITY_BASE})`;
        }
        context.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    setSize();
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", setSize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", setSize);
    };
  }, [mounted, initNodes]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 top-0 left-0 z-0 h-full w-full overflow-visible"
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
