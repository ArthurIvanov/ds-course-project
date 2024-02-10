import { FC } from "react";
export interface ICardProps {
    imagePath?: string;
    subTitle?: string;
    title?: string;
    bodyText?: string;
    buttonText?: string;
    buttonAlignBottom?: boolean;
}
export declare const ExampleCard: FC<ICardProps>;
