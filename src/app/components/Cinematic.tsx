/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TextOverTime } from './TextOverTime';

const script = [
	{
		from: 'top',
		to: 'bottom',
		css: {
			background: '#292929',
			backgroundImage: 'url(/curtains.png)',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'top center',
			backgroundSize: 'contain',
		},
		startsAt: 300,
		duration: 4000,
		Content: () => (
			<p className="fixed bottom-0">
				יום ספורט
				<br />
				<span className="text-sm">
					<b>מאת:</b> המנכ&quot;ל של <i>עד מתי</i>
				</span>
			</p>
		),
	},
	{
		from: 'left',
		to: 'right',
		css: {
			background: '#292929',
		},
		startsAt: 4000,
		duration: 2000,
		Content: () => (
			<TextOverTime
				script={[
					['אז', 0],
					['.', 200],
					['.', 300],
					['.', 400],
				]}
				initialDelay={4000}
			/>
		),
	},
	{
		from: 'bottom',
		to: 'left',
		css: {
			background: '#292929',
		},
		startsAt: 6000,
		duration: 2500,
		Content: () => (
			<TextOverTime
				script={[
					['שמעתי ', 0],
					['שיש ', 100],
					['לכם ', 200],
					['דבר ', 350],
					['חשוב ', 500],
				]}
				initialDelay={5700}
			/>
		),
	},
	{
		from: 'left',
		to: 'right',
		css: {
			background: 'blue',
		},
		startsAt: 8000,
		duration: 2500,
		Content: () => (
			<TextOverTime
				script={[
					['הכי ', 0],
					['חשוב ', 150],
					['בקורס ', 300],
					['תכנות! ', 450],
				]}
				initialDelay={7700}
			/>
		),
	},
	{
		from: 'bottom',
		to: 'bottom',
		css: {
			background: '#191919',
		},
		startsAt: 9500,
		duration: 3500,
		Content: () => (
			<TextOverTime
				script={[
					['תזכירו ', 0],
					['לי מה ', 150],
					['קורה השבוע? ', 300],
				]}
				initialDelay={9500}
			/>
		),
	},
	{
		from: 'top',
		to: 'right',
		css: {
			background: '#191919',
		},
		startsAt: 12500,
		duration: 3500,
		Content: () => <>אה כן</>,
	},
	{
		from: 'left',
		to: 'left',
		css: {
			background: '#191919',
		},
		startsAt: 15000,
		duration: 3000,
		Content: () => (
			<>
				<p>
					<u className="yellow-blink" style={{ fontSize: '156px' }}>
						<TextOverTime
							script={[
								['יום ', 400],
								['ספורט ', 700],
							]}
							initialDelay={15000}
						/>
					</u>
				</p>
				<div className="flex justify-evenly w-full md:w-3/5">
					<img
						className="h-20 animate-bounce delay-100"
						style={{ animationDelay: '100ms' }}
						src="/football.png"
						alt="football"
					/>
					<img
						className="h-20 animate-bounce delay-200"
						style={{ animationDelay: '200ms' }}
						src="/basketball.png"
						alt="basketball"
					/>
					<img
						className="h-20 animate-bounce"
						style={{ animationDelay: '300ms' }}
						src="/frisbee.png"
						alt="frisbee"
					/>
				</div>
			</>
		),
	},
	{
		from: 'right',
		to: 'right',
		css: {
			background: '#2b2a1e',
		},
		startsAt: 18000,
		duration: 3500,
		Content: () => (
			<TextOverTime
				script={[
					['אומרים ', 100],
					['שהפעם ', 300],
					['התחרות ', 500],
					['צמודה ', 700],
				]}
				initialDelay={18000}
			/>
		),
	},
	{
		from: 'top',
		to: 'bottom',
		css: {
			background: '#f51800',
		},
		startsAt: 21000,
		duration: 2000,
		Content: () => <>האדומים</>,
	},
	{
		from: 'bottom',
		to: 'right',
		css: {
			background: '#00a30b',
		},
		startsAt: 22500,
		duration: 2000,
		Content: () => <>והירוקים</>,
	},
	{
		from: 'left',
		to: 'bottom',
		css: {
			background: '#36341c',
		},
		startsAt: 24000,
		duration: 3000,
		Content: () => (
			<TextOverTime
				script={[
					['יתנו ', 200],
					['הכל ', 800],
				]}
				initialDelay={24000}
			/>
		),
	},
	{
		from: 'top',
		to: 'right',
		css: {
			background: 'black',
		},
		startsAt: 26000,
		duration: 3000,
		Content: () => (
			<TextOverTime
				script={[
					['בשביל ', 200],
					['המקום ', 400],
					['ה-#2 ', 900],
				]}
				initialDelay={26000}
			/>
		),
	},
	{
		from: 'right',
		to: 'bottom',
		css: {
			background: 'black',
		},
		startsAt: 27500,
		duration: 4000,
		Content: () => (
			<TextOverTime
				script={[
					['פשוט ', 200],
					['כי ', 400],
					['הפעם', 900],
				]}
				initialDelay={28000}
			/>
		),
	},
	{
		from: 'bottom',
		to: 'nowhere',
		css: {
			background: '#d6c300',
			'--low-opacity': 1,
		},
		startsAt: 28000,
		duration: 6000,
		Content: () => (
			<>
				<img src="/trophy.png" alt="trophy" className="h-60" />
				<p>
					<TextOverTime
						script={[
							['הגביע ', 500],
							[() => <b>הזהוב?</b>, 800],
						]}
						initialDelay={30000}
					/>
					<TextOverTime
						script={[
							['נשאר ', 500],
							[
								() => (
									<b>
										<u>צהוב.</u>
									</b>
								),
								1000,
							],
						]}
						initialDelay={31500}
					/>
					<TextOverTime
						script={[
							[
								() => (
									<b className="hantar fixed top-1/2 left-1/2">
										חנת&quot;ר
									</b>
								),
								0,
							],
						]}
						initialDelay={35500}
					/>
				</p>
			</>
		),
	},
];

export const Cinematic = ({ close }: { close: () => void }) => {
	return (
		<div
			className="h-screen w-screen fixed inset-0 overflow-hidden bg-black"
			dir="rtl"
		>
			{script.map((value, index) => (
				<div
					key={index}
					className={`slide animate-pos from-${value.from} to-${value.to}`}
					style={
						{
							'--hide-for': `${value.startsAt}ms`,
							'--duration': `${value.duration}ms`,
							'--low-opacity': 0,
							zIndex: 1000 - index,
							...value.css,
						} as any
					}
				>
					<value.Content />
				</div>
			))}
			<button
				onClick={close}
				className="fixed top-2 left-2 z-[9999] bg-white opacity-30 hover:opacity-100 rounded-md border-2 border-black hover:bg-gray-300"
			>
				<img src="/back.png" alt="back" className="h-8" />
			</button>
		</div>
	);
};
