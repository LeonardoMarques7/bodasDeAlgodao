import foto_1 from "./assets/foto_1.jpeg";
import foto_2 from "./assets/foto_2.jpeg";
import foto_3 from "./assets/foto_3.jpeg";
import foto_4 from "./assets/foto_4.jpeg";
import foto_5 from "./assets/foto_5.jpeg";
import foto_6 from "./assets/foto_6.jpg";
import Hearts from "./Hearts";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
	useEffect(() => {
		const origins = ["bottom", "left", "right", "bottom", "left", "right"];

		textos.forEach((_, index) => {
			ScrollReveal().reveal(`.reveal-${index}`, {
				origin: origins[index],
				distance: "50px",
				duration: 1000,
				delay: index * 200,
				easing: "ease-in-out",
				reset: false,
			});
		});
	}, []);

	const textos = [
		{
			img: foto_1,
			texto:
				"Fiz um sitezinho simples... Mas você sabe que, o que eu sinto por você é algo muito muito especial e lindo.❣️",
		},
		{
			img: foto_2,
			texto:
				"Você sempre esteve comigo nos momentos bons, de conquistas e felicidade e também esteve comigo nos meus momentos de crises e momentos onde eu me senti frágil e pequeno.💗",
		},
		{
			img: foto_3,
			texto:
				"A pessoa que MAIS me suporta ksksk Pq eu sou difícil de lidar... Mas assim meu amor fico muito feliz de ter você comigo ❤️.",
		},
		{
			img: foto_4,
			texto:
				"Poder todos os dias acordar e ter uma mensagem simples mas muito especial com um bomm dia bobão e acompanhado de um mimiu bem?💝",
		},
		{
			img: foto_5,
			texto:
				"Eu nunca vou esquecer o dia especial da minha vida (10.04.2023) 📅, dia em que eu percebi que estava acompanhado da melhor pessoa que poderia existir.",
		},
		{
			img: foto_6,
			texto:
				'Olha eu falo bastante né? Você me conhece ksksk Mas assim dizendo pontualmente, "eu ti amos bobãozãozisss, infinimantee e pra sempree sempress" 💞',
		},
	];

	return (
		<div className="max-w-[1280px] mx-auto p-8 text-center">
			<h1 className="text-4xl font-bold flex flex-col">
				Oi bobãozãozisss
				<span className="text-2xl mb-10 text-pink-400">
					Clique ou Passe pelos nos cards
				</span>
			</h1>
			<div className="flex flex-col items-center justify-center w-full gap-8">
				{textos.map((item, index) => (
					<div
						key={index}
						className={`reveal-${index} relative bg-[#FF4D6D] text-white max-w-[500px] w-full p-20 rounded-[25px] flex flex-col gap-4 group overflow-hidden`}
					>
						<img
							src={item.img}
							alt={`foto_${index + 1}`}
							className="absolute inset-0 w-full h-full object-cover opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[2000ms] ease-in-out rounded-[25px] z-0 pointer-events-none"
						/>
						<p className="relative z-10">{item.texto}</p>
					</div>
				))}
			</div>
			<Hearts />
			<div className="mt-5">Bjuss vidocass com carinho leléo 💕</div>
		</div>
	);
}

export default App;
