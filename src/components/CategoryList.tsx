import { useEffect, useState, memo } from "react";
import { categoryDatatype } from "../interfaces/categoryDataType";
export const CategoryList = (tokenProp: any) => {
	const [categoryData, setCategoryData] = useState([] as categoryDatatype[]);
	const [newCategoryName, setNewCategoryName] = useState<string>("");
	const [newCategoryDescription, setNewCategoryDescription] =
		useState<string>("");

	const fetchAfterLoad = async () => {
		const headers: HeadersInit = {
			Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
			"Content-Type": "application/json",
		};
		console.log(headers);
		try {
			// Fetch data from an API endpoint using async/await
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/category",
				{
					method: "GET",
					headers: headers,
				}
			);
			const jsonData = await response.json();
			console.log(jsonData);
			// Update state with fetched data
			if (Array.isArray(jsonData)) {
				setCategoryData(jsonData);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const headers: HeadersInit = {
				Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
				"Content-Type": "application/json",
			};
			console.log(headers);
			try {
				// Fetch data from an API endpoint using async/await
				const response = await fetch(
					"https://library-crud-sample.vercel.app/api/category",
					{
						method: "GET",
						headers: headers,
					}
				);
				const jsonData = await response.json();
				console.log(jsonData);
				// Update state with fetched data
				if (Array.isArray(jsonData)) {
					setCategoryData(jsonData);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		// Call the fetchData function
		fetchData();
	}, []);

	async function handlePost() {
		const headers: HeadersInit = {
			Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
			"Content-Type": "application/json",
		};
		const body: BodyInit = JSON.stringify({
			category_name: newCategoryName,
			category_description: newCategoryDescription,
			is_active: true,
		});
		console.log(headers);
		try {
			// Fetch data from an API endpoint using async/await
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/category/create",
				{
					method: "POST",
					headers: headers,
					body: body,
				}
			);
			fetchAfterLoad();
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	return (
		<>
			<dl className='max-w-md text-gray-900 divide-y divide-gray-200 '>
				{categoryData.map((category) => (
					<div key={category.id} className='flex flex-col pb-3'>
						<dt className='mb-1 text-gray-900 md:text-lg font-bold'>
							{category.category_name}
						</dt>
						<dd className='text-sm font-medium'>
							{category.category_description}
						</dd>
						<dd className='text-sm font-medium'>{category.id}</dd>
					</div>
				))}
			</dl>
			<label
				htmlFor='category_name_input'
				className='block mb-2 text-sm font-medium text-gray-900 '
			>
				Name
			</label>
			<input
				type='text'
				id='category_name_input'
				className=' w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
				placeholder='Add a new category here'
				onChange={(event) => {
					setNewCategoryName(event.target.value);
				}}
			/>
			<label
				htmlFor='category_description'
				className='block mb-2 text-sm font-medium text-gray-900 '
			>
				Description
			</label>
			<input
				type='text'
				id='category_description'
				className=' w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
				placeholder='Add a new category here'
				onChange={(event) => {
					setNewCategoryDescription(event.target.value);
				}}
			/>
			<button
				onClick={handlePost}
				className='my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				Post
			</button>
		</>
	);
};

export default memo(CategoryList);
