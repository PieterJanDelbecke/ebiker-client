import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import * as theme from "../styles/theme";
import Global from "../styles/global";

import LandingPage from "../pages/landing";
import LoginPage from "../pages/sign-in";
import HomePage from "../pages/home";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
