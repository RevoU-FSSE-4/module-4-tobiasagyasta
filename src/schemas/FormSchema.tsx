import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const eighteenAgeDate = new Date().setFullYear(
	new Date().getFullYear() - 18,
	new Date().getMonth(),
	new Date().getDate()
);

const FormSchema = Yup.object().shape({
	fullName: Yup.string()
		.required("Full name required!")
		.matches(/^[a-zA-Z\s]+$/gi, "Type in a valid name."),
	email: Yup.string()
		.required("Email required!")
		.matches(/\w+@\w+\./gi, "Type in a valid email."),
	dateOfBirth: Yup.date()
		.required("Date of birth required")
		.nullable()
		.max(
			new Date(eighteenAgeDate).toISOString(),
			"You must be 18 or older to join!"
		)
		.min(new Date(0).toISOString(), "Invalid date!"),
	streetAddress: Yup.string().required("Street address required!"),
	city: Yup.string().required("City required!"),
	state: Yup.string().required("State required!"),
	zipCode: Yup.string()
		.required("Zip Code required!")
		.matches(/^\d+$/gi, "Type in a valid zip code! (digits only)")
		.max(5, "Zip code must be at most 5 digits."),
	userName: Yup.string()
		.required("Username required!")
		.matches(
			/^[a-zA-Z0-9_]+$/g,
			"Type in a valid username! (Allows upper and lower case letters, numbers, and underscore)"
		)
		.min(5, "Username must be at least 5 characters.")
		.max(15, "Username must be at most 15 characters."),
	password: Yup.string()
		.required("Password required!")
		.min(5, "Password must contain at least 5 characters")
		.minLowercase(
			1,
			"Password must contain at least : 1 lower case letter,  1 Upper Case letter, 1 number, and 1 symbol. "
		)
		.minUppercase(
			1,
			"Password must contain at least : 1 lower case letter,  1 Upper Case letter, 1 number, and 1 symbol."
		)
		.minNumbers(
			1,
			"Password must contain at least : 1 lower case letter,  1 Upper Case letter, 1 number, and 1 symbol."
		)
		.minSymbols(
			1,
			"Password must contain at least : 1 lower case letter,  1 Upper Case letter, 1 number, and 1 symbol."
		),
});

export default FormSchema;
