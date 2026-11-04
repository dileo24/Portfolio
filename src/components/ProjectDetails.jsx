import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const ProjectDetails = ({ title, description, sections, image, tags, href, pdf, status, closeModal }) => {
	const modalRef = useRef(null);

	// Función para detectar clics fuera del modal
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			closeModal();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const hasLinks = Boolean(pdf || href);

	// Botones del proyecto: en escritorio aparecen sobre la imagen al pasar el mouse; en celular, debajo del texto.
	const LinkButtons = ({ className = "" }) => (
		<div className={`flex flex-wrap gap-3 ${className}`}>
			{pdf && (
				<a
					target="_blank"
					rel="noreferrer"
					href={pdf}
					className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg shadow-lg bg-royal hover:bg-lavender hover-animation"
				>
					Ver desglose completo (PDF)
					<img src="assets/arrow-up.svg" className="size-4" alt="" />
				</a>
			)}
			{href && (
				<a
					target="_blank"
					rel="noreferrer"
					href={href}
					className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border rounded-lg shadow-lg bg-midnight/60 border-white/30 hover:bg-white/15 hover-animation"
				>
					Visitar sitio
					<img src="assets/arrow-up.svg" className="size-4" alt="" />
				</a>
			)}
		</div>
	);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
			<motion.div
				ref={modalRef}
				className="relative max-w-4xl mx-4 overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[85vh]"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				<button onClick={closeModal} className="absolute z-10 p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 !cursor-pointer">
					<img src="assets/close.svg" className="w-6 h-6" alt="Close" />
				</button>
				{image && (
					<div className="relative w-full overflow-hidden group aspect-[2/1] rounded-t-2xl">
						<img src={image} alt={title} loading="lazy" className="object-cover object-top w-full h-full" />
						{hasLinks && (
							<div className="absolute inset-0 items-center justify-center hidden transition-opacity duration-300 opacity-0 md:flex bg-black/60 group-hover:opacity-100 backdrop-blur-[2px]">
								<LinkButtons className="justify-center" />
							</div>
						)}
					</div>
				)}
				<div className={`p-5 ${image ? "" : "pt-16"}`}>
					<div className="flex flex-wrap items-center gap-3 mb-2">
						<h5 className="text-2xl font-bold text-white">{title}</h5>
						{status && (
							<span className="px-2 py-0.5 text-xs font-bold tracking-wider uppercase border rounded-full text-sand border-sand/40">{status}</span>
						)}
					</div>

					<p className="mb-4 font-normal text-neutral-300">{description}</p>
					<div className="space-y-4">
						{sections.map((section) => (
							<div key={section.title}>
								<p className="mb-2 text-xs font-bold tracking-wider uppercase text-sand">{section.title}</p>
								<ul className="space-y-2">
									{section.items.map((item, index) => (
										<li key={index} className="flex gap-2 font-normal text-neutral-400">
											<span className="text-lavender">▸</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{hasLinks && <LinkButtons className={`mt-5 ${image ? "md:hidden" : ""}`} />}

					<div className="flex flex-wrap items-center gap-3 mt-5">
						{tags.map((tag) =>
							tag.path ? (
								<img key={tag.id} src={tag.path} alt={tag.name} title={tag.name} className="rounded-lg size-10 hover-animation" />
							) : (
								<span key={tag.id} className="px-2 py-1 text-sm border rounded-lg text-neutral-300 border-white/10">
									{tag.name}
								</span>
							)
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
