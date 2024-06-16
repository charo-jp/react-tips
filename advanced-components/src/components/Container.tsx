// Polymorphic Component
// When do you use it?
import { ElementType } from "react";

type ContainerProps = {
  as: ElementType // e.g) Button
}

const Container = ({as}: ContainerProps) => {
  const Component = as;

  return (
    <Component />
  )
}


export default Container;