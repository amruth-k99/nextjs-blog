import React from "react";
import { SubHeading } from "../Headings";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  heading: string;
  noPadding?: boolean;
}
const Container = ({
  children,
  heading,
  noPadding = false,
}: ContainerProps): JSX.Element => (
  <div
    className={`rounded-lg border container mx-auto border-gray-200 sm:px-3 md:px-6 py-3 pb-10 mb-10 ${
      noPadding ? "px-0 p-0 md:px-2" : ""
    }`}
  >
    <SubHeading heading={heading} />
    {children}
  </div>
);

export default Container;
