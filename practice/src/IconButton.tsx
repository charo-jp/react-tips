import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
// The difference between ElementType and ReactNode
// 
type IconButtonProps = {
  children: ReactNode;
  onClick: () => void;
  icon: ElementType;
} & ComponentPropsWithoutRef<"button">;

const IconButton = ({ icon, children, ...otherProps }: IconButtonProps) => {
  return <button {...otherProps}>{children}</button>;
};

export default IconButton;
