import React, { Suspense, lazy, useState } from "react";

const ProjectDetails = lazy(() => import("./ProjectDetails"));

const Project = ({ title, description, sections, href, pdf, image, tags, status }) => {
	const [isHidden, setIsHidden] = useState(false);
	return (
		<>
			<div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
				<div>
					<p className="text-2xl">
						{title}
						{status && <span className="ml-3 text-xs font-bold tracking-wider uppercase align-middle text-sand">{status}</span>}
					</p>
					<div className="flex flex-wrap gap-2 mt-2 text-sand max-w-full overflow-hidden">
						{tags.map((tag) => (
							<span key={tag.id} className="px-2 py-1">
								{tag.name}
							</span>
						))}
					</div>
				</div>
				<button onClick={() => setIsHidden(true)} className="flex items-center gap-1 cursor-pointer hover-animation">
					Ver más
					<img src="assets/arrow-right.svg" className="w-5" />
				</button>
			</div>
			<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
			{isHidden && (
				<Suspense fallback={null}>
					<ProjectDetails
						title={title}
						description={description}
						sections={sections}
						status={status}
						image={image}
						tags={tags}
						href={href}
						pdf={pdf}
						closeModal={() => setIsHidden(false)}
					/>
				</Suspense>
			)}
		</>
	);
};

export default Project;
