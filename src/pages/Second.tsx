import SingleInput from "../components/SingleInput";

const Second = () => {
	return (
		<>
			<h1 className='text-3xl text-center font-bold dark:text-white'>
				Address Information
			</h1>
			<div className='relative z-0 w-full my-5 group'>
				<SingleInput name='streetAddress' type='text' />
				<label
					className='peer-focus:font-medium absolute text-base text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					htmlFor='streetAddress'
				>
					Address
				</label>
			</div>

			<div className='relative z-0 w-full my-5 group'>
				<SingleInput name='city' type='text' />
				<label
					className='peer-focus:font-medium absolute text-base text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					htmlFor='city'
				>
					City
				</label>
			</div>
			<div className='relative z-0 w-full my-5 group'>
				<SingleInput name='state' type='text' />
				<label
					className='peer-focus:font-medium absolute text-base text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					htmlFor='state'
				>
					State
				</label>
			</div>
			<div className='relative z-0 w-full my-5 group'>
				<SingleInput name='zipCode' type='text' />
				<label
					className='peer-focus:font-medium absolute text-base text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					htmlFor='zipCode'
				>
					Zip Code
				</label>
			</div>
		</>
	);
};

export default Second;
