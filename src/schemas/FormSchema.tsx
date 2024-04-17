import * as Yup from "yup";

const eighteenAgeDate = new Date().setFullYear(
	new Date().getFullYear() - 18,
	new Date().getMonth(),
	new Date().getDate()
);

const FormSchema = Yup.object().shape({
	fullName: Yup.string()
		.required("Required!")
		.matches(/^[a-zA-Z\s]+$/, "Type in a valid name."),
	email: Yup.string()
		.required("Required!")
		.matches(/\w+@\w+\./gi, "Type in a valid email."),
	dateOfBirth: Yup.date()
		.required("Date of birth required")
		.nullable()
		.max(
			new Date(eighteenAgeDate).toISOString(),
			"You must be 18 or older to join!"
		),
});

export default FormSchema;
