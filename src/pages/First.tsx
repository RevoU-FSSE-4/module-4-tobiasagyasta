import SingleInput from "../components/SingleInput";
import DateInput from "../components/DateInput";

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
					<SingleInput name='fullName' />
				</div>

				<div className='w-full md:w-1/2 px-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>
					<SingleInput name='email' />
				</div>
				<div className='w-full md:w-1/2 px-3 mb-3 md:mb-8 mt-5'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='dateOfBirth'
					>
						Date of Birth
					</label>
					<DateInput name='dateOfBirth' />
				</div>
			</div>
		</>
	);
};

export default First;
