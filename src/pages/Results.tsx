import { FormData } from "../interfaces/formData";
const Results = (data: any) => {
	const dataValues: any = Object.values(data)[0];
	const formData: FormData = {
		fullName: dataValues.fullName,
		email: dataValues.email,
		dateOfBirth: dataValues.dateOfBirth,
		streetAddress: dataValues.streetAddress,
		city: dataValues.city,
		state: dataValues.state,
		zipCode: dataValues.zipCode,
		userName: dataValues.userName,
		password: dataValues.password,
	};
	return (
		<div className=' flex flex-col text-center m-auto'>
			<h1>Your Results</h1>
			<span>Your Full Name : {formData.fullName}</span>
			<span>Your Email : {formData.email}</span>
			<span>Your DOB : {formData.dateOfBirth}</span>
			<span>Your Address : {formData.streetAddress}</span>
			<span>Your City : {formData.city}</span>
			<span>Your State : {formData.state}</span>
			<span>Your Zipcode : {formData.zipCode}</span>
			<span>Your User Name : {formData.userName}</span>
			<span>Your password : {formData.password}</span>
		</div>
	);
};

export default Results;
