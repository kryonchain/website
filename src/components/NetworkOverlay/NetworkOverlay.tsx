import React, { useRef, useEffect } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    phaseX: number;
    phaseY: number;
}

const NetworkOverlay: React.FC<{ nodeCount?: number }> = ({ nodeCount = 200 }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const nodesRef = useRef<Node[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        nodesRef.current = Array.from({ length: nodeCount }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            radius: 1.5 + Math.random() * 1.5,
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
        }));

        let animationFrameId: number;

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const nodes = nodesRef.current;

            nodes.forEach(node => {
                node.x += node.vx + Math.sin(node.phaseX) * 0.3;
                node.y += node.vy + Math.sin(node.phaseY) * 0.3;

                node.phaseX += 0.01;
                node.phaseY += 0.01;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 150, 255, 0.4)';
                ctx.fill();
            });

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) { // nagyobb távolság → több kapcsolat
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        const alpha = 0.12 - dist / 1500;
                        ctx.strokeStyle = `rgba(0, 150, 255, ${Math.max(alpha, 0)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [nodeCount]);

    return (
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
    );
};

export default NetworkOverlay;
