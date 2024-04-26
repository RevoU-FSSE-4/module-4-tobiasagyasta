import { useEffect, useState, memo } from "react";
import { categoryDatatype } from "../interfaces/categoryDataType";
export const CategoryList = (tokenProp: any) => {
	const [categoryData, setCategoryData] = useState([] as categoryDatatype[]);
	const [newCategoryName, setNewCategoryName] = useState<string>("");
	const [newCategoryDescription, setNewCategoryDescription] =
		useState<string>("");
	const [newCategoryNameUpdated, setNewCategoryNameUpdated] =
		useState<string>("");
	const [newCategoryDescriptionUpdated, setNewCategoryDescriptionUpdated] =
		useState<string>("");
	const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

	const fetchAfterLoad = async () => {
		const headers: HeadersInit = {
			Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
			"Content-Type": "application/json",
		};

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

			// Update state with fetched data
			if (Array.isArray(jsonData)) {
				setCategoryData(jsonData);
				console.log(categoryData);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	/* eslint-disable */
	useEffect(() => {
		const fetchData = async () => {
			const headers: HeadersInit = {
				Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
				"Content-Type": "application/json",
			};

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

				// Update state with fetched data
				if (Array.isArray(jsonData)) {
					setCategoryData(jsonData);
					console.log(categoryData);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		// Call the fetchData function
		fetchData();
	}, []);
	/* eslint-enable */

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

		try {
			categoryData.forEach((category) => {
				if (category.category_name === newCategoryName) {
					alert("Category name already exists. Try again!");
					throw new Error("Category name already exists. Try again!");
				}
			});
			// Fetch data from an API endpoint using async/await
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/category/create",
				{
					method: "POST",
					headers: headers,
					body: body,
				}
			);
			console.log(response);
			setNewCategoryName("");
			setNewCategoryDescription("");
			fetchAfterLoad();
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function handleDelete(id: string) {
		const headers: HeadersInit = {
			Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
			"Content-Type": "application/json",
		};

		try {
			// Fetch data from an API endpoint using async/await
			const response = await fetch(
				`https://library-crud-sample.vercel.app/api/category/${id}`,
				{
					method: "DELETE",
					headers: headers,
				}
			);
			console.log(response);
			fetchAfterLoad();
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	const handleItemMouseEnter = (
		id: string,
		category_description: string,
		category_name: string
	) => {
		setHoveredItemId(id);
		setNewCategoryDescriptionUpdated(category_description);
		setNewCategoryNameUpdated(category_name);
	};

	const handleItemMouseLeave = () => {
		setHoveredItemId(null);
		setNewCategoryDescriptionUpdated("");
		setNewCategoryNameUpdated("");
	};

	async function handleUpdate(
		id: string,
		newCategoryNameUpdated: string,
		newCategoryDescriptionUpdated: string
	) {
		const headers: HeadersInit = {
			Authorization: `Bearer ${Object.values(tokenProp)}`, // Include the bearer token
			"Content-Type": "application/json",
		};
		const body: BodyInit = JSON.stringify({
			id: id,
			category_name: newCategoryNameUpdated,
			category_description: newCategoryDescriptionUpdated,
			is_active: true,
		});

		try {
			// Fetch data from an API endpoint using async/await
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/category/update",
				{
					method: "PUT",
					headers: headers,
					body: body,
				}
			);
			console.log(response);
			setNewCategoryNameUpdated("");
			setNewCategoryDescriptionUpdated("");
			fetchAfterLoad();
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	return (
		<>
			<dl className='max-w-md text-gray-900 divide-y divide-gray-900 '>
				{categoryData.map((category) => (
					<div
						key={category.id}
						className='flex flex-col pb-3'
						onMouseEnter={() =>
							handleItemMouseEnter(
								category.id,
								category.category_description,
								category.category_name as string
							)
						}
						onMouseLeave={handleItemMouseLeave}
					>
						<dt className='mb-1 text-gray-900 md:text-lg font-bold'>
							{`${category.category_name} (${category.id})`}
						</dt>
						<dd className='text-medium font-medium'>
							Description : {category.category_description}
						</dd>
						<button
							className='w-10 bg-white hover:bg-blue-700 rounded'
							onClick={() => handleDelete(category.id)}
						>
							&#10060;
						</button>
						{hoveredItemId === category.id && (
							<>
								<div className='my-5'>
									<h1>Update your category</h1>
									<label
										htmlFor='updated_category_name'
										className='block mb-2 text-sm font-medium text-gray-900 '
									>
										Updated Name
									</label>
									<input
										type='text'
										id='updated_category_name'
										className='w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
										placeholder='Update name'
										value={newCategoryNameUpdated}
										onChange={(event) =>
											setNewCategoryNameUpdated(event.target.value)
										}
									/>
									<label
										htmlFor='updated_category_description'
										className='block mb-2 text-sm font-medium text-gray-900 '
									>
										Updated Description
									</label>
									<input
										type='text'
										id='updated_category_description'
										className='w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
										placeholder='Update description'
										value={newCategoryDescriptionUpdated}
										onChange={(event) =>
											setNewCategoryDescriptionUpdated(event.target.value)
										}
									/>
									<button
										className='w-10 bg-white hover:bg-blue-700 rounded'
										onClick={() => {
											handleUpdate(
												category.id,
												newCategoryNameUpdated,
												newCategoryDescriptionUpdated
											);
										}}
									>
										&#10003;
									</button>
								</div>
							</>
						)}
					</div>
				))}
			</dl>
			<div className='border border-l-0 border-r-0 border-b-0 border-solid border-gray-900'>
				<h1>Add new category</h1>
				<label
					htmlFor='category_name_input'
					className='block mb-2 text-sm font-medium text-gray-900 '
				>
					Name
				</label>
				<input
					type='text'
					id='category_name_input'
					className=' w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
					placeholder='Add a new category here'
					value={newCategoryName}
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
					className=' w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
					placeholder='Add a new category here'
					value={newCategoryDescription}
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
			</div>
		</>
	);
};

export default memo(CategoryList);
