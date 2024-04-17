import { useFormikContext, Field } from "formik";
import { ReactNode } from "react";

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
					<Field
						className='appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
						id='fullName'
						name='fullName'
						type='text'
						placeholder='Jane Doe'
					></Field>
				</div>

				<div className='w-full md:w-1/2 px-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>
					<Field
						className='appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
						id='email'
						name='email'
						type='email'
						placeholder='janedoe@email.com'
					/>
				</div>
				<div className='w-full md:w-1/2 px-3 mb-3 md:mb-8 mt-5'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='dateOfBirth'
					>
						Date of Birth
					</label>
					<Field
						className='appearance-none block w-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
						name='dateOfBirth'
						id='dateOfBirth'
						type='date'
					/>
				</div>
			</div>
		</>
	);
};

export default First;
