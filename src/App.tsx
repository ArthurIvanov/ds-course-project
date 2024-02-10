import React from "react";
import { GlobalStyle, lightTheme } from "./lib/theme";
import { ExampleCard, Button, Icon } from "./lib";
import styled, { ThemeProvider } from "styled-components";

const image =
	"https://wallbox.ru/wallpapers/main/201124/bfc11ec1075aa8714a8dfc780382e413.jpg";

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
	const ifNotFilled = false;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				<Button
					text="Buy me"
					iconBefore={<Icon iconName="chevronRight" size={16} />}
					iconAfter={<Icon iconName="chevronRight" size={16} />}
				/>
				<StyledContainer>
					<ExampleCard
						imagePath={image}
						title={title}
						bodyText={bodyText}
						subTitle={subTitle}
					/>
					<ExampleCard
						imagePath={image}
						title="Заголовок введенный руками"
						bodyText={bodyText}
					/>
				</StyledContainer>
			</main>
		</ThemeProvider>
	);
}

export default App;
