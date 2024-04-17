import * as Yup from "yup";

const personalInfoSchema = Yup.object().shape({
	fullName: Yup.string().required("Required"),
});

export default personalInfoSchema;
