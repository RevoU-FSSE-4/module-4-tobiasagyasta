import { Formik, Form, Field } from "formik";
import SingleInput from "./components/SingleInput";
import { useEffect, useState } from "react";

export const SignIn = () => {
	const [token, setToken] = useState<string>("");

	const handleLogout = async () => {
		const headers: HeadersInit = {
			Authorization: `Bearer ${token}`, // Include the bearer token
			"Content-Type": "application/json",
		};
		console.log(headers);
		try {
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/user/logout",
				{
					method: "DELETE",
					headers: headers,
				}
			);

			if (!response.ok) {
				throw new Error("Failed to log out");
			}

			// Clear the access token from local storage or wherever it's stored
			localStorage.removeItem("token");
			setToken("");
			// Perform any additional logout actions, such as redirecting to the login page
			// history.push('/login');
		} catch (error) {
			console.error("Error occurred while logging out:", error);
		}
	};
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
		} catch (error) {
			console.error("Error occured when logging in:", error);
		}
	};

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await fetch(
	// 				"https://library-crud-sample.vercel.app/api/user/login"
	// 			);
	// 			if (!response.ok) {
	// 				throw new Error("Failed to fetch!");
	// 			}
	// 			const jsonData = await response.json();
	// 			setData(jsonData);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={(values, actions) => {
					alert(`You have submitted! \n` + JSON.stringify(values, null, 2));
					handleSubmit(values);
					actions.setSubmitting(false);
					actions.resetForm({ isValidating: true });
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
						{token !== "" ? token : null}
						<br />
						{token !== "" ? (
							<button onClick={handleLogout}> Logout</button>
						) : null}
					</div>
				</div>
			</Formik>
		</>
	);
};

export default SignIn;
