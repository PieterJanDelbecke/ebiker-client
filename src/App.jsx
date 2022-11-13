import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Global, css, ThemeProvider } from "@emotion/react";
import * as theme from "../styles/theme";

import LandingPage from "../pages/landing";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global
				styles={css`
					body {
						margin: 0;
					}
				`}
			/>
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
