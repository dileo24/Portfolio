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

	// La imagen abre la presentación en PDF si existe; si no, el sitio.
	const mainLink = pdf || href;
	const imageEl = image && <img src={image} alt={title} loading="lazy" className="object-cover w-full h-full duration-300 hover:scale-105" />;

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
				{imageEl &&
					(mainLink ? (
						<a target="_blank" rel="noreferrer" href={mainLink} className="block w-full overflow-hidden aspect-video rounded-t-2xl">
							{imageEl}
						</a>
					) : (
						<div className="w-full overflow-hidden aspect-video rounded-t-2xl">{imageEl}</div>
					))}
				<div className={`p-5 ${imageEl ? "" : "pt-16"}`}>
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

					{(pdf || href) && (
						<div className="flex flex-wrap gap-3 mt-5">
							{pdf && (
								<a
									target="_blank"
									rel="noreferrer"
									href={pdf}
									className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-royal hover:bg-lavender hover-animation"
								>
									Ver presentación del proyecto (PDF)
									<img src="assets/arrow-up.svg" className="size-4" alt="" />
								</a>
							)}
							{href && (
								<a
									target="_blank"
									rel="noreferrer"
									href={href}
									className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border rounded-lg border-white/20 hover:bg-white/10 hover-animation"
								>
									Visitar sitio
									<img src="assets/arrow-up.svg" className="size-4" alt="" />
								</a>
							)}
						</div>
					)}

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
