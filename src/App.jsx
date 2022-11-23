import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import * as theme from "../styles/theme";
import Global from "../styles/global";

import LandingPage from "../pages/landing";
import HomePage from "../pages/home";
import SignInPage from "../pages/sign-in";
import SignUpPage from "../pages/sign-up";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
