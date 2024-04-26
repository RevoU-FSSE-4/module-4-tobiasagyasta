import { Formik, Form, Field } from "formik";
import SingleInput from "./components/SingleInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
	const [token, setToken] = useState<string>("");
	const navigate = useNavigate();
	const handleSubmit = async (values: any) => {
		try {
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/user/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			);
			const data = await response.json();
			setToken(data.token);
			localStorage.setItem("token", data.token);
			navigate("/signed");
		} catch (error) {
			console.error("Error occured when logging in:", error);
		}
	};
	return (
		<>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={(values, actions) => {
					alert(`You have submitted! \n` + JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
					actions.resetForm({ isValidating: true });
					handleSubmit(values);
				}}
			>
				<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
					<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
						<Form>
							<Field
								as={SingleInput}
								type='email'
								name='email'
								placeholder='email'
							></Field>
							<Field
								as={SingleInput}
								type='password'
								name='password'
								placeholder='password'
							></Field>
							<button type='submit'>Submit</button>
						</Form>
						<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
							Sign in to your account
						</h2>
					</div>
					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						{token !== "" ? (
							<h2> You have signed in! Redirecting page...</h2>
						) : null}
					</div>
				</div>
			</Formik>
		</>
	);
};

export default SignIn;
