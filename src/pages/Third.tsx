import SingleInput from "../components/SingleInput";
import { useState } from "react";
const Third = () => {
	const [passwordField, setPasswordField] = useState("password");
	function handleCheckbox() {
		if (passwordField === "password") {
			setPasswordField("text");
		} else {
			setPasswordField("password");
		}
	}
	return (
		<>
			<h1 className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 text-center'>
				Address Information
			</h1>
			<div className='flex flex-wrap w-2/5 mx-auto mb-6 mt-10'>
				<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='userName'
					>
						User Name
					</label>
					<SingleInput name='userName' type='text' />
				</div>

				<div className='w-full md:w-1/2 px-3'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<SingleInput id='password' name='password' type={passwordField} />
					<input type='checkbox' onClick={handleCheckbox}></input>{" "}
					<span>Show password</span>
				</div>
			</div>
		</>
	);
};

export default Third;
