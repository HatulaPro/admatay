import { CinematicButton } from '@/app/components/CinematicButton';
import Image from 'next/image';

export const revalidate = 1200;

const MILLIS_IN_DAY = 1000 * 60 * 60 * 24;

export default function Home() {
	const startTime = new Date('2023-05-03T21:00:00.000Z');
	const currentTime = new Date();
	const endTime = new Date('2023-09-28T21:00:00.000Z');

	const donePercent =
		((currentTime.getTime() - startTime.getTime()) /
			(endTime.getTime() - startTime.getTime())) *
		100;

	const weeksSurvived = Math.floor(
		(currentTime.getTime() - startTime.getTime()) / (MILLIS_IN_DAY * 7)
	);
	const daysLeft = Math.floor(
		(endTime.getTime() - currentTime.getTime()) / MILLIS_IN_DAY
	);

	return (
		<div className="max-w-4xl py-12 sm:px-12 px-4 min-h-[50vh] flex flex-col items-center m-auto">
			<h1 className="text-4xl mb-16" style={{ direction: 'rtl' }}>
				עד מתי?
			</h1>

			<p className="text-sm">We are {donePercent.toFixed(2)}% done</p>
			<div className="flex w-full justify-center items-center text-center gap-3">
				<p className="shrink-0">
					{startTime.toLocaleDateString('he-IL')}
					<br />
					<span className="text-md text-blue-400">Start Date</span>
				</p>
				<div className="text-xl relative h-8 rounded-md w-full bg-purple-900 group">
					<div
						className="done absolute h-full border-r-2 rounded-l-md inset-0 transition-opacity opacity-50 group-hover:opacity-100"
						style={{ width: donePercent + '%' }}
					>
						<p className="text-sm absolute top-full pt-2 ml-0.5 -translate-x-1/2 left-full opacity-0 transition-opacity group-hover:opacity-100 text-blue-400 w-max">
							<Image
								className="mx-auto mb-2"
								src="/arrow.png"
								width={16}
								height={16}
								alt="Up Arrow"
							/>
							You are here
							<br />
							{currentTime.toLocaleDateString('he-IL')}
						</p>
					</div>
				</div>
				<p className="shrink-0">
					{endTime.toLocaleDateString('he-IL')}
					<br />
					<span className="text-md text-blue-400">Finish Date</span>
				</p>
			</div>

			<div className="grid sm:grid-cols-3 text-center place-items-center grid-cols-1 gap-8 pt-20">
				<div className="bg-purple-900 bg-opacity-75 p-6 rounded-lg">
					<h2 className="text-2xl mb-6 font-bold">{weeksSurvived}</h2>
					<p>Weeks survived</p>
				</div>
				<div className="bg-purple-900 bg-opacity-75 p-6 rounded-lg">
					<h2 className="text-2xl mb-6 font-bold">{daysLeft}</h2>
					<p>Days until we leave</p>
				</div>
				<CinematicButton />
			</div>
		</div>
	);
}
