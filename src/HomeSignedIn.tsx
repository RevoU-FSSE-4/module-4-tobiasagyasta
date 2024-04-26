import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "./components/CategoryList";

export const HomeSignedIn: React.FC = () => {
	const [token, setToken] = useState<string>("");
	const [username, setUsername] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	const handleLogout = async () => {
		const headers: HeadersInit = {
			Authorization: `Bearer ${token}`, // Include the bearer token
			"Content-Type": "application/json",
		};
		try {
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/user/logout",
				{
					method: "DELETE",
					headers: headers,
				}
			);

			if (!response.ok) {
				throw new Error("Failed to log out");
			}

			// Clear the access token from local storage or wherever it's stored
			localStorage.removeItem("token");
			setToken("");
			// Perform any additional logout actions, such as redirecting to the login page
			// history.push('/login');
		} catch (error) {
			console.error("Error occurred while logging out:", error);
		}
	};

	const loadProfile = useCallback(async () => {
		if (token !== "") {
			try {
				const headers: HeadersInit = {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				};
				const response = await fetch(
					"https://library-crud-sample.vercel.app/api/user/profile",
					{
						method: "GET",
						headers: headers,
					}
				);
				const data = await response.json();
				setUsername(data.name);
			} catch (error) {
				console.error("Error occured when logging in:", error);
			}
		}
	}, [token]);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	useEffect(() => {
		if (token === "") {
			const redirectTimer = setTimeout(() => {
				navigate("/");
			}, 3000);
			return () => clearTimeout(redirectTimer);
		}
	}, [token, navigate]);

	useEffect(() => {
		if (token !== "") {
			loadProfile().finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
	}, [token, loadProfile]);

	return (
		<>
			<div className='bg-gray-900 text-white p-4 flex justify-between items-center'>
				{loading ? null : (
					<h1 className='text-lg'>
						Welcome to the Categories App{" "}
						<strong>{username && ` ${username}!`}</strong>
					</h1>
				)}
				<div className='flex gap-4'>
					{token !== "" && (
						<button onClick={handleLogout} className='hover:text-gray-400'>
							Logout
						</button>
					)}
				</div>
			</div>

			<div className='flex justify-evenly items-center'>
				{!loading && token !== "" && <CategoryList tokenProp={token} />}
			</div>
		</>
	);
};

export default HomeSignedIn;
