const MILLIS_IN_DAY = 1000 * 60 * 60 * 24;

export default function Home() {
	const startTime = new Date('05/03/2023');
	const currentTime = new Date();
	const endTime = new Date('09/28/2023');

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
						<p className="text-sm absolute top-full pt-2 ml-0.5 -translate-x-1/2 left-full opacity-0 transition-opacity group-hover:opacity-100 text-blue-400 w-full">
							{/* eslint-disable-next-line */}
							<img
								className="w-4 mx-auto mb-2"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_Arrow_Up.svg/1200px-Red_Arrow_Up.svg.png"
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

			<div className="grid sm:grid-cols-3 grid-cols-1 gap-8 pt-20">
				<div className="bg-purple-900 bg-opacity-75 p-6 rounded-lg">
					<h2 className="text-2xl mb-6 font-bold text-center">
						{weeksSurvived}
					</h2>
					<p>Weeks survived</p>
				</div>
				<div className="bg-purple-900 bg-opacity-75 p-6 rounded-lg">
					<h2 className="text-2xl mb-6 font-bold text-center">
						{daysLeft}
					</h2>
					<p>Days until we leave</p>
				</div>
				<div className="bg-purple-900 bg-opacity-75 p-6 rounded-lg">
					<h2 className="text-2xl mb-6 font-bold text-center">1</h2>
					<p>Sports days to win</p>
				</div>
			</div>
		</div>
	);
}
