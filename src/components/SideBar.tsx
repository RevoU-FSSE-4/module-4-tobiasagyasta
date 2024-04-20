import React from "react";

const SideBar = (page: any) => {
	const pageNumber: any = Object.values(page)[0];
	function completedStep() {
		return (
			<span className='absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900'>
				<svg
					className='w-3.5 h-3.5 text-green-500 dark:text-green-400'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 16 12'
				>
					<path
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M1 5.917 5.724 10.5 15 1.5'
					/>
				</svg>
			</span>
		);
	}
	function defaultStep(pageNumber: number) {
		if (pageNumber === 0) {
			return (
				<span className='absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700'>
					<svg
						className='w-3.5 h-3.5 text-gray-500 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 20'
					>
						<path d='M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z' />
					</svg>
				</span>
			);
		}
		if (pageNumber === 1) {
			return (
				<span className='absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700'>
					<svg
						className='w-3.5 h-3.5 text-gray-500 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							fillRule='evenodd'
							d='M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z'
							clipRule='evenodd'
						/>
						<path d='M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z' />
					</svg>
				</span>
			);
		}
		if (pageNumber === 2) {
			return (
				<span className='absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700'>
					<svg
						className='w-6 h-6 text-gray-500 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							fillRule='evenodd'
							d='M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
			);
		}
	}

	return (
		<ol className='relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400'>
			<li className='mb-6 ms-6'>
				{pageNumber === 0 && completedStep()}
				{pageNumber !== 0 && defaultStep(0)}
				<h3
					className={`font-medium leading-tight ${
						pageNumber === 0 ? "text-green-500" : "text-gray-500"
					}`}
				>
					Personal Information
				</h3>
				<p className='text-sm'>We promise we won't share it!</p>
			</li>
			<li className='mb-8 ms-6'>
				{pageNumber === 1 && completedStep()}
				{pageNumber !== 1 && defaultStep(1)}
				<h3
					className={`font-medium leading-tight ${
						pageNumber === 1 ? "text-green-500" : "text-gray-500"
					}`}
				>
					Address Information
				</h3>
				<p className='text-sm'>What's your location?</p>
			</li>
			<li className='ms-6'>
				{pageNumber === 2 && completedStep()}
				{pageNumber !== 2 && defaultStep(2)}
				<h3
					className={`font-medium leading-tight ${
						pageNumber === 2 ? "text-green-500" : "text-gray-500"
					}`}
				>
					Account Information
				</h3>
				<p className='text-sm'>So you can log in.</p>
			</li>
		</ol>
	);
};

export default SideBar;
