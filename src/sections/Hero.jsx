import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
	const handleClick = (e, id) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
			<HeroText />
			<ParallaxBackground />
			<a className="scroll-down" onClick={(e) => handleClick(e, "about")}></a>
		</section>
	);
};

export default Hero;
