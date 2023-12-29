import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  onClick?: () => void;
  size?: "sm" | "normal" | "lg";
}
const PrimaryButton = ({
  label,
  loading = false,
  disabled = false,
  outline = true,
  onClick,
  size = "normal",
}: ButtonProps) => {
  const sizeStyle = size === "sm" ? "py-1" : size === "lg" ? "py-3" : "py-2";
  const bgColor = outline
    ? "bg-white text-black border-black"
    : "text-white bg-red-500 border-red-500";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex font-medium duration-200 p-3 ease-out shadow m-auto w-full border-2 ${bgColor} ${sizeStyle} text-xs md:text-md`}
    >
      {loading && (
        <AiOutlineLoading3Quarters
          className={`mr-2 h-4 w-4 my-auto animate-spin z-10 ${bgColor}`}
        />
      )}
      {label}
    </button>
  );
};

export default PrimaryButton;
