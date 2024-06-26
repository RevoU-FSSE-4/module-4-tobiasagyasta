import SingleInput from "../components/SingleInput";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import SideBar from "../components/SideBar";
const Third = () => {
	const [passwordCheckboxField, setPasswordCheckboxField] =
		useState("password");
	function handleCheckbox() {
		if (passwordCheckboxField === "password") {
			setPasswordCheckboxField("text");
		} else {
			setPasswordCheckboxField("password");
		}
	}
	return (
		<>
			<ProgressBar
				visualParts={[
					{
						percentage: "100%",
						color: "#3B82F6",
					},
				]}
			/>
			<div className='flex flex-row justify-between items-center'>
				<SideBar page={2} />
				<div className='w-11/12 mb-10'>
					<div className='relative z-0 w-full my-5 group'>
						<SingleInput name='userName' type='text' />
						<label
							className='peer-focus:font-medium absolute text-base text-gray-700  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							htmlFor='userName'
						>
							User Name
						</label>
					</div>

					<div className='relative z-0 w-full my-5 group'>
						<SingleInput name='password' type={passwordCheckboxField} />
						<label
							className='peer-focus:font-medium absolute text-base text-gray-700  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='mt-3 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:ring-blue-400 '
							type='checkbox'
							onClick={handleCheckbox}
							name='showPasswordCheckbox'
						></input>{" "}
						<label
							htmlFor='showPasswordCheckbox'
							className=' absolute bottom-1 left-6 text-sm font-normal text-gray-700 '
						>
							Show password
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Third;
