import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LandingPage from "../pages/landing";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
