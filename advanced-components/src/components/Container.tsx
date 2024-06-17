// Polymorphic Component with Generics
// When do you use it?
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// T must be ElementType.
type ContainerProps<T extends ElementType> = {
  as?: T; // e.g) Button
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  // The frequent usecase of polymorphic component is for stlying.
  return <Component {...props}>{children}</Component>;
};

export default Container;
