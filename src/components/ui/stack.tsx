import React from "react";

interface Props {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
}

const Stack = ({ children, spacing, className }: Props) => {
  const classNames = `flex flex-col gap-20 ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default Stack;
