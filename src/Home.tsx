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
						Sign Up
					</Link>
					<Link to='/signin' replace className='hover:text-gray-400'>
						Sign In
					</Link>
				</div>
			</div>
			<section>
				<section className='sticky'>
					<div className='max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center'>
						<h1 className='font-extrabold leading-10 tracking-tight text-[#201515]  sm:leading-none text-5xl sm:text-9xl'>
							<span className='inline md:block'>Make Your </span>
							<span className='relative mt-2 bg-clip-text text-[#201515] md:inline-block'>
								Category.
							</span>
						</h1>
					</div>

					<div className='max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center'>
						<div className='text-center py-4 space-x-4'>
							<button className='backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center'>
								<Link to='/signup'>Sign Up</Link>
							</button>
							<button className='backdrop-blur-sm transition duration-500 ease-in-out bg-[#0112ff] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center'>
								<Link to='/signin'>Sign In</Link>
							</button>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default Home;
