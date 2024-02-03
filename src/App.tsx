import React from "react";
import { GlobalStyle, lightTheme } from "./lib/theme";
import { ExampleCard } from "./lib";
import styled, { ThemeProvider } from "styled-components";
import ManImage from "./lib/example-card/assets/image-3.png";

const title = "Заголовок";
const subTitle = "Подзаголовок карточки";
const bodyText =
	"Повседневная практика показывает, что начало повседневной работы по формированию позиции прекрасно подходит для реализации как самодостаточных, так и внешне зависимых концептуальных решений.";

const StyledContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: stretch;
	height: 600px;
`;

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				<StyledContainer>
					<ExampleCard
						imagePath={ManImage}
						title={title}
						bodyText={bodyText}
						subTitle={subTitle}
					/>
					<ExampleCard
						imagePath={ManImage}
						title="Заголовок введенный руками"
						bodyText={bodyText}
					/>
				</StyledContainer>
			</main>
		</ThemeProvider>
	);
}

export default App;
