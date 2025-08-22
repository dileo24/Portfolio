import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navItems = [
		{ id: "home", label: "Home" },
		{ id: "about", label: "Sobre mi" },
		{ id: "projects", label: "Proyectos" },
		{ id: "experiences", label: "Experiencia" },
		{ id: "contact", label: "Contacto" },
	];

	const handleClick = (e, id) => {
		e.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
		setIsOpen(false);
	};

	const Navigation = () => (
		<ul className="nav-ul">
			{navItems.map((item) => (
				<li key={item.id} className="nav-li">
					<a className="nav-link" href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}>
						{item.label}
					</a>
				</li>
			))}
		</ul>
	);

	return (
		<div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
			<div className="mx-auto c-space max-w-7xl">
				<div className="flex items-center justify-between py-2 sm:py-0">
					<a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
						Joaquín
					</a>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
						aria-label="Toggle menu"
					>
						<img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle menu" />
					</button>

					<nav className="hidden sm:flex">
						<Navigation />
					</nav>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="block overflow-hidden text-center sm:hidden"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -10 }}
						transition={{ duration: 0.2 }}
					>
						<nav className="pb-5">
							<Navigation />
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
