import { Routes, Route } from "react-router-dom";
import StepForm from "./StepForm";
import SignIn from "./SignIn";
import Home from "./Home";
import HomeSignedIn from "./HomeSignedIn";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/signed' element={<HomeSignedIn />}></Route>
				<Route path='/signup' element={<StepForm />}></Route>
				<Route path='/signin' element={<SignIn />}></Route>
			</Routes>
		</>
	);
};

export default App;
