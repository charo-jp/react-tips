import { ReactNode } from "react";

type CardProps = {
  title: string;
  actions: ReactNode;
  children: ReactNode;
};

const Card = ({ children, title, actions }: CardProps) => {
  return (
    <div>
      <h2>title</h2>
      {children}
      {actions}
    </div>
  );
};

export default Card;
