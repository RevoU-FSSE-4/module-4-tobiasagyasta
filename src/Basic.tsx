import React from "react";
import { Formik } from "formik";

const Basic = () => (
	<div className='text-center text-red-600 '>
		<h1>Test form!</h1>
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form
					className='flex flex-col justify-center text-center content-evenly'
					onSubmit={handleSubmit}
				>
					<label htmlFor='email'>Email</label>
					<input
						className='text-center border-4 border-solid'
						type='email'
						name='email'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					{errors.email && touched.email && errors.email}
					<label htmlFor='password'>Password</label>
					<input
						className='text-center border-4 border-solid'
						type='password'
						name='password'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					{errors.password && touched.password && errors.password}
					<button type='submit' disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	</div>
);

export default Basic;
