import { type ReactNode } from "react";
// mark ReactNode type so tha
type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
