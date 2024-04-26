import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<h1>Welcome to the Categories page! Sign in to your page.</h1>
			<Link to='/signup' replace>
				Sign Up!
			</Link>
			<Link to='/signin' replace>
				Sign In!
			</Link>
		</div>
	);
};

export default Home;
