import SingleInput from "../components/SingleInput";

const Second = () => {
	return (
		<>
			<h1 className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 text-center'>
				Address Information
			</h1>
			<div className='flex flex-wrap w-2/5 mx-auto mb-6 mt-10'>
				<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='streetAddress'
					>
						Address
					</label>
					<SingleInput name='streetAddress' type='text' />
				</div>

				<div className='w-full md:w-1/2 px-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='city'
					>
						City
					</label>
					<SingleInput name='city' type='text' />
				</div>
				<div className='w-full md:w-1/2 px-3 mt-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='state'
					>
						State
					</label>
					<SingleInput name='state' type='text' />
				</div>
				<div className='w-full md:w-1/2 px-3 mt-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='zipCode'
					>
						Zip Code
					</label>
					<SingleInput name='zipCode' type='text' />
				</div>
			</div>
		</>
	);
};

export default Second;
