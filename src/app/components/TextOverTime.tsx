export const TextOverTime = ({
	script,
	initialDelay,
}: {
	script: [string | (() => JSX.Element), number][];
	initialDelay: number;
}) => (
	<p>
		{script.map(([Text, delay], index) => (
			<span
				className="text-over-time"
				style={{ '--delay': `${delay + initialDelay}ms` } as any}
				key={index}
			>
				{typeof Text === 'string' ? Text : <Text />}
			</span>
		))}
	</p>
);
