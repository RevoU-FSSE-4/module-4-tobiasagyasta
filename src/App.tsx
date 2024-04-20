import { useState } from "react";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import { Formik, Form } from "formik";
import FormSchema from "./schemas/FormSchema";

const App = () => {
	const [page, setPage] = useState(0);
	// const [formData, setFormData] = useState({});

	const conditionalComponent = () => {
		switch (page) {
			case 0:
				return <First />;
			case 1:
				return <Second />;
			case 2:
				return <Third />;
			default:
				return <First />;
		}
	};
	function handleNext(e: any, errors: any) {
		if (page < 2) {
			if (!isPageInvalid(page, errors)) {
				setPage(page + 1);
			}
		} else {
			if (!isPageInvalid(page, errors)) {
				setPage(0);
			}
		}
	}

	function isPageInvalid(page: number, errors: any) {
		if (page === 0) {
			if (errors.fullName) {
				alert(errors.fullName);
				return true;
			}
			if (errors.email) {
				alert(errors.email);
				return true;
			}
			if (errors.dateOfBirth) {
				alert(errors.dateOfBirth);
				return true;
			}
			return false;
		}
		if (page === 1) {
			if (errors.streetAddress) {
				alert(errors.streetAddress);
				return true;
			}
			if (errors.city) {
				alert(errors.city);
				return true;
			}
			if (errors.state) {
				alert(errors.state);
				return true;
			}
			if (errors.zipCode) {
				alert(errors.zipCode);
				return true;
			}
			return false;
		}
		if (page === 2) {
			if (errors.userName) {
				alert(errors.userName);
				return true;
			}
			if (errors.password) {
				alert(errors.password);
				return true;
			}
			return false;
		}
	}
	function handlePrevious() {
		setPage(page - 1);
	}
	return (
		<>
			<Formik
				initialValues={{
					fullName: "",
					email: "",
					dateOfBirth: "",
					streetAddress: "",
					city: "",
					state: "",
					zipCode: "",
					userName: "",
					password: "",
				}}
				onSubmit={(values, actions) => {
					// setFormData(values);
					alert(`You have submitted! \n` + JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
					actions.resetForm({ isValidating: true });
				}}
				validationSchema={FormSchema}
			>
				{(props) => (
					<Form className='max-w-md mx-auto'>
						<h1 className='text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>
							Toby's React Form
						</h1>
						{conditionalComponent()}
						<button
							className={` flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto`}
							onClick={(e) => {
								handleNext(e, props.errors);
							}}
							type={page === 1 || page === 2 ? "button" : "submit"}
						>
							{page === 0 || page === 1 ? "Next" : "Submit"}
						</button>
						<button
							className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto mt-3 ${
								page > 0 ? `flex` : `hidden`
							}`}
							onClick={handlePrevious}
							type='button'
						>
							{page > 0 ? "Previous" : null}
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default App;
