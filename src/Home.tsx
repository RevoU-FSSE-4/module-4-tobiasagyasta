import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
	const [token, setToken] = useState<string>("");
	const [username, setUsername] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const handleLogout = async () => {
		const headers: HeadersInit = {
			Authorization: `Bearer ${token}`, // Include the bearer token
			"Content-Type": "application/json",
		};
		console.log(headers);
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

	const loadProfile = async () => {
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
				console.log(data);
				setUsername(`, ${data.name}!`);
			} catch (error) {
				console.error("Error occured when logging in:", error);
			}
		}
	};

	useEffect(() => {
		setTimeout(() => {
			try {
				const storedToken = localStorage.getItem("token");
				if (storedToken) {
					setToken(storedToken);
				}
				loadProfile();
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}, 2000);
	}, [token]); // Include token in the dependency array

	if (loading) {
		return <div>Loading....</div>;
	}
	return (
		<div>
			{loading ? null : <h1>Welcome to home page {username}</h1>}
			<Link to='/signup' replace>
				Sign Up!
			</Link>
			<Link to='/signin' replace>
				Sign In!
			</Link>
			{token !== "" ? <button onClick={handleLogout}> Logout</button> : null}
		</div>
	);
};

export default Home;
