// One-off script: convierte los fondos pesados del Hero a WebP redimensionado.
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readFileSync, statSync, unlinkSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "..", "public", "assets");

const targets = [
	{ src: "sky.jpg", maxWidth: 1920, quality: 72 },
	{ src: "mountain-1.png", maxWidth: 1920, quality: 72 },
	{ src: "mountain-2.png", maxWidth: 1920, quality: 72 },
	{ src: "planets.png", maxWidth: 1920, quality: 75 },
	{ src: "coding-pov.png", maxWidth: 1200, quality: 78 },
];

for (const { src, maxWidth, quality } of targets) {
	const srcPath = path.join(assetsDir, src);
	const outPath = path.join(assetsDir, src.replace(/\.(png|jpe?g)$/i, ".webp"));
	const before = statSync(srcPath).size;

	const image = sharp(readFileSync(srcPath));
	const metadata = await image.metadata();
	const resized = metadata.width && metadata.width > maxWidth ? image.resize({ width: maxWidth }) : image;

	await resized.webp({ quality }).toFile(outPath);

	const after = statSync(outPath).size;
	console.log(`${src} -> ${path.basename(outPath)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
	unlinkSync(srcPath);
}

// Assets muertos: sin referencias en src/, se borran directamente.
for (const dead of ["mountain-3.png", "grid.png", "compu.png"]) {
	const deadPath = path.join(assetsDir, dead);
	try {
		unlinkSync(deadPath);
		console.log(`Borrado asset sin uso: ${dead}`);
	} catch {
		// ya no existe, sigue
	}
}
