/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
		Content: () => <>אז...</>,
	},
	{
		from: 'bottom',
		to: 'left',
		css: {
			background: '#292929',
		},
		startsAt: 6000,
		duration: 2500,
		Content: () => <>שמעתי שיש לכם דבר חשוב</>,
	},
	{
		from: 'left',
		to: 'right',
		css: {
			background: 'blue',
		},
		startsAt: 8000,
		duration: 2500,
		Content: () => <>הכי חשוב בקורס תכנות!</>,
	},
	{
		from: 'bottom',
		to: 'bottom',
		css: {
			background: '#191919',
		},
		startsAt: 9500,
		duration: 3500,
		Content: () => <>תזכירו לי מה קורה השבוע?</>,
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
		duration: 4000,
		Content: () => (
			<>
				<p>
					&nbsp;יש לכם&nbsp;
					<u className="yellow-blink">יום ספורט</u>
				</p>
				<img
					style={{ top: '20%' }}
					src="/football.png"
					alt="football"
					className="animated-moving-image-1"
				/>
				<img
					style={{ top: '20%' }}
					src="/basketball.png"
					alt="basketball"
					className="animated-moving-image-2"
				/>
				<img
					style={{ top: '20%' }}
					src="/frisbee.png"
					alt="frisbee"
					className="animated-moving-image-3"
				/>
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
		Content: () => <>ושמעתי שהפעם התחרות צמודה</>,
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
		duration: 2000,
		Content: () => <>יתנו הכל</>,
	},
	{
		from: 'top',
		to: 'right',
		css: {
			background: 'black',
		},
		startsAt: 25000,
		duration: 3000,
		Content: () => (
			<>
				<p>בשביל המקום ה #2</p>
			</>
		),
	},
	{
		from: 'right',
		to: 'bottom',
		css: {
			background: 'black',
		},
		startsAt: 27500,
		duration: 3000,
		Content: () => <>פשוט כי הפעם</>,
	},
	{
		from: 'right',
		to: 'top',
		css: {
			background: '#d6c300',
		},
		startsAt: 29000,
		duration: 2000,
		Content: () => (
			<>
				<img src="/trophy.png" alt="trophy" className="h-60" />
				<p>
					הגביע <b>הזהוב</b>
				</p>
			</>
		),
	},
	{
		from: 'bottom',
		to: 'nowhere',
		css: {
			background: '#d6c300',
			'--low-opacity': 1,
		},
		startsAt: 30000,
		duration: 6000,
		Content: () => (
			<>
				<img src="/trophy.png" alt="trophy" className="h-60" />
				<p>
					הגביע <b>הזהוב</b>?
					<br />
					נשאר{' '}
					<b>
						<u>צהוב</u>
					</b>
					.
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
