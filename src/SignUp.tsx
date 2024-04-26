import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import SingleInput from "./components/SingleInput";
import FormSchema from "./schemas/FormSchema";

export const SignUp = () => {
	const [passwordCheckboxField, setPasswordCheckboxField] =
		useState("password");
	const navigate = useNavigate();
	function handleCheckbox() {
		if (passwordCheckboxField === "password") {
			setPasswordCheckboxField("text");
		} else {
			setPasswordCheckboxField("password");
		}
	}
	const handleSubmit = async (values: any) => {
		try {
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/user/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			);
			if (!response.ok) {
				throw new Error("Email exists in the database! Try logging in!");
			}
			if (response.ok) {
				alert("You have registered! Welcome to the app.");
				const data = await response.json();
				console.log(data);
				navigate("/");
			}
		} catch (error) {
			alert(error);
			console.error("Error occured when logging in:", error);
		}
	};
	return (
		<>
			<div className='bg-gray-900 text-white p-4 flex justify-between items-center'>
				<div className='flex gap-4'>
					<Link to='/' replace className='hover:text-gray-400'>
						Back to Home!
					</Link>
				</div>
			</div>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
				}}
				onSubmit={(values, actions) => {
					actions.setSubmitting(false);
					actions.resetForm({ isValidating: true });
					handleSubmit(values);
				}}
				validationSchema={FormSchema}
			>
				<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
					<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
						<Form>
							<div className='relative z-0 w-full my-5 group'>
								<label
									className='peer-focus:font-medium absolute text-base text-gray-700  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
									htmlFor='name'
								>
									Name
								</label>
								<Field
									as={SingleInput}
									type='text'
									name='name'
									placeholder='name'
								></Field>
							</div>
							<div className='relative z-0 w-full my-5 group'>
								<label
									className='peer-focus:font-medium absolute text-base text-gray-700  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
									htmlFor='email'
								>
									Email
								</label>
								<Field
									as={SingleInput}
									type='email'
									name='email'
									placeholder='email'
								></Field>
							</div>
							<div className='relative z-0 w-full my-5 group'>
								<label
									className='peer-focus:font-medium absolute text-base text-gray-700  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
									htmlFor='password'
								>
									Password
								</label>
								<Field
									as={SingleInput}
									type={passwordCheckboxField}
									name='password'
									placeholder='password'
								></Field>
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

							<button
								className='my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
								type='submit'
							>
								Submit
							</button>
						</Form>
						<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
							Create a new account!
						</h2>
					</div>
				</div>
			</Formik>
		</>
	);
};
