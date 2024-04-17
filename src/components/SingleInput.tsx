import { useField } from "formik";

const SingleInput = (props: any) => {
	const [field, meta, helpers] = useField(props.name);

	const setTouchOnFocus = () => {
		helpers.setTouched(true);
	};
	return (
		<>
			<input
				className='appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
				autoComplete='off'
				type='text'
				name={props.name}
				onChange={field.onChange}
				value={field.value}
				onFocus={setTouchOnFocus}
			/>
			{meta.error && meta.touched && (
				<div className='text-red-600'>{meta.error}</div>
			)}
		</>
	);
};
export default SingleInput;
