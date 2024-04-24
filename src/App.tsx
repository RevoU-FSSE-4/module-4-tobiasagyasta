import {  Routes, Route, Link, Navigate } from "react-router-dom"
import StepForm from "./StepForm"
import SignIn from "./SignIn"
import Home from "./Home"
import { Sign } from "crypto"

export const App = () => {
  return (
    <>
    <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route
        element = {<StepForm/>} 
        path="/signup">
        </Route>
        <Route path="/signin" element = {<SignIn/>}></Route>
    </Routes> 
    </>
  )
}

export default App
