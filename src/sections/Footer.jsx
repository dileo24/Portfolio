import { mySocials } from "../constants";
const Footer = () => {
	return (
		<section className="flex flex-wrap items-center justify-center gap-5 pb-3 text-sm text-neutral-400 c-space">
			<div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
			<div className="flex gap-3 mb-5">
				{mySocials.map((social, index) => (
					<a href={social.href} key={index}>
						<img
							src={social.icon}
							className="w-6 h-6"
							alt={social.name}
							style={social.icon.includes("github") ? { filter: "invert(1)" } : {}}
						/>
					</a>
				))}
			</div>
		</section>
	);
};

export default Footer;
