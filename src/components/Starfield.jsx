import { useEffect, useRef } from "react";

// Fondo de estrellas liviano: un solo canvas fijo detrás de todo el sitio.
// Las estrellas derivan lento y titilan; cada tanto cruza una estrella fugaz.
const COLORS = ["255,255,255", "255,255,255", "255,255,255", "190,170,255", "214,153,92"];

export function Starfield() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let w = 0;
		let h = 0;
		let stars = [];
		let shooting = null;
		let nextShot = performance.now() + 4000;
		let raf = 0;
		let last = performance.now();

		const makeStar = () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			r: Math.random() * 1.1 + 0.3,
			speed: Math.random() * 6 + 2, // px por segundo
			phase: Math.random() * Math.PI * 2,
			twinkle: Math.random() * 1.5 + 0.5,
			color: COLORS[Math.floor(Math.random() * COLORS.length)],
		});

		const resize = () => {
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(180, Math.round((w * h) / 9000));
			stars = Array.from({ length: count }, makeStar);
		};

		const draw = (now) => {
			const dt = Math.min((now - last) / 1000, 0.05);
			last = now;
			ctx.clearRect(0, 0, w, h);

			for (const s of stars) {
				if (!reduceMotion) {
					s.y -= s.speed * dt;
					s.x += s.speed * 0.3 * dt;
					if (s.y < -2) {
						s.y = h + 2;
						s.x = Math.random() * w;
					}
					if (s.x > w + 2) s.x = -2;
				}
				const alpha = reduceMotion ? 0.7 : 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(now / 1000 * s.twinkle + s.phase));
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${s.color},${alpha})`;
				ctx.fill();
			}

			if (!reduceMotion) {
				if (!shooting && now > nextShot) {
					shooting = { x: Math.random() * w * 0.7, y: Math.random() * h * 0.4, life: 0 };
				}
				if (shooting) {
					shooting.life += dt;
					const t = shooting.life / 0.9;
					const len = 120;
					const x = shooting.x + t * 500;
					const y = shooting.y + t * 220;
					const grad = ctx.createLinearGradient(x, y, x - len, y - len * 0.44);
					grad.addColorStop(0, `rgba(255,255,255,${0.8 * (1 - t)})`);
					grad.addColorStop(1, "rgba(255,255,255,0)");
					ctx.strokeStyle = grad;
					ctx.lineWidth = 1.2;
					ctx.beginPath();
					ctx.moveTo(x, y);
					ctx.lineTo(x - len, y - len * 0.44);
					ctx.stroke();
					if (t >= 1) {
						shooting = null;
						nextShot = now + 6000 + Math.random() * 8000;
					}
				}
				raf = requestAnimationFrame(draw);
			}
		};

		resize();
		window.addEventListener("resize", resize);
		raf = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10" />;
}
