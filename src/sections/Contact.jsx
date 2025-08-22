import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState("success");
	const [alertMessage, setAlertMessage] = useState("");
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const showAlertMessage = (type, message) => {
		setAlertType(type);
		setAlertMessage(message);
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 5000);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			await emailjs.send(
				"service_obpdan7",
				"template_4rgo7zt",
				{
					from_name: formData.name,
					to_name: "Joaquín",
					from_email: formData.email,
					to_email: "joacodileo@gmail.com",
					message: formData.message,
				},
				"RnC4lYPnTnSLkA0jh"
			);
			setIsLoading(false);
			setFormData({ name: "", email: "", message: "" });
			showAlertMessage("success", "Tu mensaje se envió correctamente!");
		} catch (error) {
			setIsLoading(false);
			showAlertMessage("danger", "Algo salió mal. Vuelva a intentaro o pruebe contactándome por otra de mis redes.");
		}
	};
	return (
		<section className="relative flex items-center c-space section-spacing">
			<Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
			{showAlert && <Alert type={alertType} text={alertMessage} />}
			<div className="flex flex-col items-center justify-center max-w-xl p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
				<div className="flex flex-col items-start w-full gap-5 mb-10">
					<h2 className="text-heading">¡Hablemos!</h2>
					<p className="font-normal text-neutral-400">
						Puede ponerse en contacto conmigo a través de este formulario o cualquiera de mis redes sociales al final de la página.
					</p>
				</div>
				<form className="w-full" onSubmit={handleSubmit}>
					<div className="mb-5">
						<label htmlFor="name" className="feild-label">
							Nombre
						</label>
						<input
							id="name"
							name="name"
							type="text"
							className="field-input field-input-focus"
							placeholder="Mariano López"
							autoComplete="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-5">
						<label htmlFor="email" className="feild-label">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							className="field-input field-input-focus"
							placeholder="m_lopez@gmail.com"
							autoComplete="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-5">
						<label htmlFor="message" className="feild-label">
							Mensaje
						</label>
						<textarea
							id="message"
							name="message"
							type="text"
							rows="4"
							className="field-input field-input-focus"
							placeholder="..."
							autoComplete="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
					>
						{!isLoading ? "Enviar" : "Enviando..."}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
