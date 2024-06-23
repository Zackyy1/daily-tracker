import React from "react";

export type TButtonSize = "sm" | "md" | "lg";
export type TButtonAppearance = "primary" | "secondary";

export interface IButtonProps {
  className?: string;
  size?: TButtonSize;
  onClick?: (event: React.MouseEvent) => void;
  text: string;
  appearance?: TButtonAppearance;
  inverted?: boolean;
}

export const Button = ({ onClick, text }: IButtonProps) => {
  return <div className="bg-zinc-600 px-4 py-2 inline text-white cursor-pointer select-none" onClick={onClick}>{text}</div>;
};
