import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export default function AuraBackground({ children }: { children?: ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const aura = useRef({ ax: window.innerWidth / 2, ay: window.innerHeight / 2, bx: window.innerWidth / 2, by: window.innerHeight / 2 });
    const hueRef = useRef({ idx: 0, t: 0 });

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const hues = [310, 315, 320];
        let W = 0, H = 0, rafId: number;

        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMove);

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const drawBlob = (x: number, y: number, r: number, hue: number, sat: number, alpha: number) => {
            const g = ctx.createRadialGradient(x, y, 0, x, y, r);
            g.addColorStop(0, `hsla(${hue},${sat}%,65%,${alpha})`);
            g.addColorStop(0.4, `hsla(${hue + 30},${sat}%,55%,${alpha * 0.5})`);
            g.addColorStop(1, `hsla(${hue + 60},${sat}%,40%,0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.ellipse(x, y, r, r * 0.85, Math.sin(Date.now() * 0.0005) * 0.4, 0, Math.PI * 2);
            ctx.fill();
        };

        const frame = () => {
            rafId = requestAnimationFrame(frame);
            hueRef.current.t += 0.004;

            const { idx, t } = hueRef.current;
            const h1 = lerp(hues[idx % hues.length], hues[(idx + 1) % hues.length], (Math.sin(t) + 1) / 2);

            const { x: mx, y: my } = mouse.current;
            let { ax, ay, bx, by } = aura.current;

            ax = lerp(ax, mx, 0.08);
            ay = lerp(ay, my, 0.08);
            bx = lerp(bx, ax, 0.05);
            by = lerp(by, ay, 0.05);
            aura.current = { ax, ay, bx, by };

            ctx.clearRect(0, 0, W, H);
            ctx.globalCompositeOperation = "screen";

            drawBlob(bx, by, 220, h1 + 40, 90, 0.18);
            drawBlob(ax, ay, 160, h1, 100, 0.25);
            drawBlob(ax + Math.sin(Date.now() * 0.001) * 30, ay + Math.cos(Date.now() * 0.0013) * 25, 100, h1 - 30, 95, 0.3);
            drawBlob(ax - 20, ay + 15, 70, h1 + 80, 85, 0.2);

            ctx.globalCompositeOperation = "source-over";
        };

        const hueInterval = setInterval(() => {
            hueRef.current.idx = (hueRef.current.idx + 1) % hues.length;
        }, 2500);

        frame();

        return () => {
            cancelAnimationFrame(rafId);
            clearInterval(hueInterval);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <div style={{ position: "relative", minHeight: "100vh", background: "#e6e6e6" }}>
            <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}