import "./App.css";
import "./Basic";
import Basic from "./Basic";

function App() {
	return (
		<>
			<div className='App'>
				<header className='App-header'>
					<p className='text-3xl text-red-600 font-bold underline'>
						Hello world!
					</p>
					<Basic />
				</header>
			</div>
		</>
	);
}

export default App;
