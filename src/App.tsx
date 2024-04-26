import { Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";
import Home from "./Home";
import HomeSignedIn from "./HomeSignedIn";
import { SignUp } from "./SignUp";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='/signin' element={<SignIn />}></Route>
				<Route path='/signed' element={<HomeSignedIn />}></Route>
			</Routes>
		</>
	);
};

export default App;
