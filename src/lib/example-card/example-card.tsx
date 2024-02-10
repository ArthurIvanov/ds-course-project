import styled from "styled-components";
import { FC } from "react";
import { Button } from "../button";

export interface ICardProps {
	imagePath?: string;
	subTitle?: string;
	title?: string;
	bodyText?: string;
	buttonText?: string;
	buttonAlignBottom?: boolean;
}

const StyledCard = styled.div<ICardProps>`
	border-radius: 4px;
	display: inline-flex;
	flex-direction: column;
	overflow: hidden;
	min-width: 360px;
	box-shadow: 0px 4px 10px 0px rgba(14, 19, 27, 0.08);
	min-heigth: 500px;
	// Прибивает футер карточки с кнопкой к нижниму краю карточки
	justify-content: space-between;
`;

const StyledCardContent = styled.div<ICardProps>`
	display: flex;
	flex-direction: column;
`;

const StyledCardImage = styled.img<ICardProps>`
	width: 100%;
	height: 220px;
	object-fit: cover;
`;

const StyledCardTextContent = styled.div<ICardProps>`
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const StyledCardHeadingContent = styled.div<ICardProps>`
	display: flex;
	flex-direction: column;
	gap: 4px;

	span {
		color: rgba(13, 41, 70, 1);
		font-size: 16px;
		font-weight: 300;
		line-height: 20px;
		display: inline-block;
	}

	h4 {
		color: rgba(0, 0, 0, 1);
		font-size: 24px;
		font-weight: 600;
		line-height: 36px;
		display: inline-block;
	}
`;

const StyledCardBodyContent = styled.p<ICardProps>`
	color: rgba(13, 41, 70, 1);
	font-size: 18px;
	font-weight: 300;
	line-height: 24px;
	display: inline-block;
`;

const StyledCardFooter = styled.div<ICardProps>`
	padding: 16px;
`;

export const ExampleCard: FC<ICardProps> = ({
	imagePath,
	subTitle,
	title = "Заголовок по умолчанию",
	bodyText,
	buttonText = "Подробнее",
	// Свойство которое необходимо добавить в качестве ДЗ
	// buttonAlignBottom = false,
}) => {
	return (
		<StyledCard>
			<StyledCardContent>
				<StyledCardImage src={imagePath} />
				<StyledCardTextContent>
					<StyledCardHeadingContent subTitle={subTitle}>
						{subTitle ? <span>{subTitle}</span> : null}
						<h4>{title}</h4>
					</StyledCardHeadingContent>
					<StyledCardBodyContent>{bodyText}</StyledCardBodyContent>
				</StyledCardTextContent>
			</StyledCardContent>
			<StyledCardFooter>
				<Button text={buttonText} />
			</StyledCardFooter>
		</StyledCard>
	);
};
