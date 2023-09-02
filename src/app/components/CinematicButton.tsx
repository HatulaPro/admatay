'use client';
import { useEffect, useState } from 'react';
import { Cinematic } from './Cinematic';

export const CinematicButton = () => {
	const [showCinematic, setShowCinematic] = useState(false);

	useEffect(() => {
		if (showCinematic) {
			const handler = (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					setShowCinematic(false);
				}
			};

			window.addEventListener('keydown', handler);

			return () => window.removeEventListener('keydown', handler);
		}
	}, [showCinematic, setShowCinematic]);

	return (
		<>
			<button
				type="button"
				className="bg-purple-900 bg-opacity-75 p-6 rounded-lg hover:bg-purple-950"
				onClick={() => setShowCinematic(true)}
				style={{ width: '-webkit-fill-available' }}
			>
				<img
					src="/play.png"
					alt="Play Cinematic"
					className="w-12 mx-auto py-1"
					style={{ filter: 'invert(1)' }}
				/>
				Watch Cinematic
			</button>
			{showCinematic && (
				<Cinematic close={() => setShowCinematic(false)} />
			)}
		</>
	);
};
