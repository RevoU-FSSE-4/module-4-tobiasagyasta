import { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import { Formik, Form } from "formik";
import personalInfoSchema from "./components/schemas/personalInfoSchema";

const App = () => {
	const [page, setPage] = useState(0);
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
	function handleSubmit() {
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
					dateOfBirth: new Date().toISOString(),
				}}
				onSubmit={(values, actions) => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}}
				validationSchema={personalInfoSchema}
			>
				<Form>
					{conditionalComponent()}
					<button
						className='flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto'
						onClick={handleSubmit}
						type='submit'
					>
						{page === 0 || page === 1 ? "Next" : "Submit"}
					</button>
					<button
						className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto ${
							page > 0 ? `flex` : `hidden`
						}`}
						onClick={handlePrevious}
					>
						{page > 0 ? "Previous" : null}
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default App;
