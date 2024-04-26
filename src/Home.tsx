import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<div className='bg-gray-900 text-white p-4 flex justify-between items-center'>
				<h1 className='text-lg'>
					Welcome to the Categories App! Sign in to your page.
				</h1>
				<div className='flex gap-4'>
					<Link to='/signup' replace className='hover:text-gray-400'>
						Sign Up!
					</Link>
					<Link to='/signin' replace className='hover:text-gray-400'>
						Sign In!
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
