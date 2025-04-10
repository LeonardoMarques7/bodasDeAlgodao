import { useEffect, useState } from "react";
import image__heart from "./assets/hearts.png";

const Hearts = () => {
	const [hearts, setHearts] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const newHeart = {
				id: Date.now(),
				left: Math.random() * 100,
				size: Math.random() * 30 + 20,
				duration: Math.random() * 5 + 5,
			};

			setHearts((prev) => [...prev, newHeart]);

			// Remover o coração após a duração da animação
			setTimeout(() => {
				setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
			}, newHeart.duration * 1000);
		}, 400); // frequência de criação

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{hearts.map((heart) => (
				<img
					key={heart.id}
					src={image__heart}
					alt="coração"
					className="absolute animate-heart-float"
					style={{
						left: `${heart.left}%`,
						bottom: "-50px", // começa levemente abaixo da tela
						width: `${heart.size}px`,
						height: `${heart.size}px`,
						animationDuration: `${heart.duration}s`,
					}}
				/>
			))}
		</div>
	);
};

export default Hearts;
