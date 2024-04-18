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
	function handleNext() {
		if (page >= 2) {
			setPage(0);
		} else {
			setPage(page + 1);
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
					actions.resetForm();
				}}
				validationSchema={FormSchema}
			>
				<Form className='max-w-md mx-auto'>
					{conditionalComponent()}
					<button
						className={`flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto`}
						onClick={handleNext}
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
			</Formik>
		</>
	);
};

export default App;
