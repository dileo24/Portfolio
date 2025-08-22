import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
	const { scrollYProgress } = useScroll();
	const x = useSpring(scrollYProgress, { damping: 50 });
	const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
	const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
	const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

	return (
		<section className="absolute inset-0 bg-black/40">
			<div className="relative h-screen overflow-y-hidden">
				<div
					className="absolute inset-0 w-full h-screen -z-50"
					style={{
						backgroundImage: "url(/assets/sky.jpg)",
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						filter: "hue-rotate(20deg) saturate(1.5)",
					}}
				/>
				<motion.div
					className="absolute inset-0 -z-30"
					style={{
						backgroundImage: "url(/assets/planets.png)",
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						x: planetsX,
						filter: "sepia(0.5) hue-rotate(90deg) saturate(2)",
					}}
				/>
				<motion.div
					className="absolute inset-0 -z-20"
					style={{
						backgroundImage: "url(/assets/mountain-2.png)",
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						y: mountain2Y,
						filter: "hue-rotate(50deg)",
					}}
				/>
				<motion.div
					className="absolute inset-0 -z-10"
					style={{
						backgroundImage: "url(/assets/mountain-1.png)",
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						y: mountain1Y,
						filter: "hue-rotate(70deg) brightness(1.1)",
					}}
				/>
			</div>
		</section>
	);
};

export default ParallaxBackground;
