import { FC, ReactNode } from "react";
export type TAppearance = "primary" | "secondary" | "tertiary" | "inverted";
export interface IButtonProps {
    appearance?: TAppearance;
    /**
     * Make button disabled
     *
     */
    disabled?: boolean;
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
export declare const StyledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps, never>;
/**
 *
 * Button is a primary call to action in user interface
 *
 *
 */
export declare const Button: FC<IButtonProps>;
