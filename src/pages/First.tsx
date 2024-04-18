import SingleInput from "../components/SingleInput";

const First = () => {
	return (
		<>
			<h1 className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 text-center'>
				Personal Information
			</h1>
			<div className='flex flex-wrap w-2/5 mx-auto mb-6 mt-10'>
				<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='fullName'
					>
						Full Name
					</label>
					<SingleInput name='fullName' type='text' />
				</div>

				<div className='w-full md:w-1/2 px-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>
					<SingleInput name='email' type='text' />
				</div>
				<div className='w-full md:w-1/2 px-3 mb-3 md:mb-8 mt-5'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='dateOfBirth'
					>
						Date of Birth
					</label>
					<SingleInput name='dateOfBirth' type='date' />
				</div>
			</div>
		</>
	);
};

export default First;
