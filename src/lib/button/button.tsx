import { FC, ReactNode } from "react";
import styled from "styled-components";

export type TAppearance = "primary" | "secondary" | "tertiary" | "inverted";

export interface IButtonProps {
	appearance?: TAppearance;

	/**
	 * Make button disabled
	 *
	 */
	disabled?: boolean;
	// @todo Описать состояние загрузки
	// loading

	/**
	 * Text is explanation of button meaning
	 */
	text: string;

	/**
	 * Small - used for comapct use cases
	 * Base used for main call to action
	 *
	 */
	size?: "base" | "small";

	/**
	 * Places icon before text
	 */
	iconBefore?: ReactNode;

	/**
	 * Places icon after text
	 */
	iconAfter?: ReactNode;
}

export const StyledButton = styled.button<IButtonProps>`
	border: 1px solid;
	border-radius: ${(props) => props.theme.cornerRadius.componentBase};
	font-size: 16px;
	line-height: 24px;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
	box-shadow: none;
	cursor: pointer;

	&:focus {
		box-shadow: ${(props) => props.theme.shadows?.focus};
	}

	${(props) =>
		props.size === "base" &&
		`
        padding: 0 12px;
        border-radius: ${props.theme.cornerRadius.micro};
        line-height: 30px;
        height: ${props.theme.spacing.height.small};
    `}

	${(props) =>
		props.size === "small" &&
		`
        padding: 0 16px;
        border-radius: ${props.theme.cornerRadius.micro};
        line-height: 30px;
        height: ${props.theme.spacing.height.base};
    `}

	${(props) =>
		props.appearance === "primary" &&
		`
        &:enabled {
                background-color: ${props.theme.colors.lead.loud.enabled};
                border-color: ${props.theme.colors.lead.loud.enabled};
                color: ${props.theme.colors.text.calm.main};
            }

        &:hover {
                background-color: ${props.theme.colors.lead.loud.hover};
                border-color: ${props.theme.colors.lead.loud.hover};
                color: ${props.theme.colors.text.calm.main};
            }

            &:focus {
                background-color: ${props.theme.colors.lead.loud.enabled};
                border-color: ${props.theme.colors.lead.loud.enabled};
                color: ${props.theme.colors.text.calm.main};
        }

            &:active {
                background-color: ${props.theme.colors.lead.loud.active};
                border-color: ${props.theme.colors.lead.loud.active};
                color: ${props.theme.colors.text.calm.main};
            }     
    
    `}

    ${(props) =>
		props.disabled &&
		`
            &:disabled {
            color: ${props.theme.colors.text.loud.disabled}; 
            background-color: ${props.theme.colors.bg.calm.disabled};  
            border-color: ${props.theme.colors.bg.calm.disabled}; 
            cursor: not-allowed;    
        }
        `}
`;

/**
 *
 * Button is a primary call to action in user interface
 *
 *
 */
export const Button: FC<IButtonProps> = ({
	appearance = "primary",
	text,
	size = "base",
	disabled,
	iconAfter,
	iconBefore,
}) => {
	return (
		<StyledButton
			text={text}
			appearance={appearance}
			size={size}
			disabled={disabled}
		>
			{iconBefore}
			{text}
			{iconAfter}
		</StyledButton>
	);
};
