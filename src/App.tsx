import React from "react";
import { GlobalStyle, lightTheme } from "./lib/theme";
import { Placeholder, Button } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				{/* <Placeholder text="Привет мир!" /> */}
				<Button />
				<Button size="small" disabled />
			</main>
		</ThemeProvider>
	);
}

export default App;
