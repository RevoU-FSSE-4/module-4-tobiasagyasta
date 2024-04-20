import { useState, useEffect } from "react";
const ProgressBar = ({
	visualParts = [{ percentage: "0%", color: "white" }],
}) => {
	const [widths, setWidths] = useState(
		visualParts.map(() => {
			return "0";
		})
	);

	useEffect(() => {
		requestAnimationFrame(() =>
			setWidths(
				visualParts.map((item) => {
					return item.percentage;
				})
			)
		);
	}, [visualParts]);
	return (
		<div className='flex h-[6px] my-10 mx-0 border border-gray-100 '>
			{visualParts.map((item, index) => {
				return (
					<div
						key={index}
						style={{ width: widths[index], backgroundColor: item.color }}
						className='transition-[width]'
					></div>
				);
			})}
		</div>
	);
};

export default ProgressBar;
