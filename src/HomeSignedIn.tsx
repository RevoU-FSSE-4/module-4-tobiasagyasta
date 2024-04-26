import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

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
		setTimeout(async () => {
			try {
				const storedToken = localStorage.getItem("token");
				if (storedToken) {
					setToken(storedToken);
				}
				await loadProfile();
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}, 0);
	}, [token, loadProfile]); // Include token in the dependency array

	useEffect(() => {
		if (token === "") {
			const redirectTimer = setTimeout(() => {
				navigate("/");
			}, 3000);

			return () => clearTimeout(redirectTimer);
		}
	}, [token, navigate, loadProfile]);
	if (loading) {
		return (
			<>
				{token === "" ? (
					<h1>You have not signed in! Redirecting page...</h1>
				) : (
					<h1>Loading...</h1>
				)}
			</>
		);
	}
	return (
		<div>
			{loading ? null : <h1>Welcome to home page {` ${username}!`}</h1>}
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

export default HomeSignedIn;
