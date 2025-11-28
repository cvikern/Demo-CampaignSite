import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; dx: number; dy: number; size: number; alpha: number }[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(window.innerWidth / 10, 100); // Responsive particle count
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.2, // Slow horizontal drift
          dy: (Math.random() - 0.5) * 0.2, // Slow vertical drift
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a gradient overlay to ensure text readability (vignette effect)
      // Fixed: createRadialGradient requires 6 arguments (x0, y0, r0, x1, y1, r1)
      const maxDim = Math.max(canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 4,
        canvas.width / 2,
        canvas.height / 2,
        maxDim
      );
      gradient.addColorStop(0, 'rgba(5, 5, 5, 0)');
      gradient.addColorStop(1, 'rgba(5, 5, 5, 0.8)');
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Reset alpha
      ctx.globalAlpha = 1;
      // Draw Vignette
      ctx.fillStyle = gradient; 
      ctx.fillRect(0,0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default ParticleBackground;