import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const FormSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email required!")
		.matches(/\w+@\w+\./gi, "Type in a valid email."),
	name: Yup.string()
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
