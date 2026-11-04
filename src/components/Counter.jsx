import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Número que cuenta desde 0 cuando entra en pantalla.
export function Counter({ value, prefix = "", duration = 1.6 }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-10% 0px" });
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const controls = animate(0, value, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setDisplay(Math.round(v)),
		});
		return () => controls.stop();
	}, [inView, value, duration]);

	return (
		<span ref={ref}>
			{prefix}
			{display}
		</span>
	);
}
