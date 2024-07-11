import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type DefaultProps = {
  children: ReactNode;
  textOnly?: boolean;
  to?: string;
};

type ButtonProps = DefaultProps & ComponentPropsWithoutRef<"button">;

type AnchorProps = DefaultProps & LinkProps;

// props is AnchorProps is used to tell TypeScript that the returned type
// is AnchorProps. In the code below, it returns true if it is indeed AnchorProps.
// Otherwise false.
const isLinkProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "to" in props;
};

const Button = (props: ButtonProps | AnchorProps) => {
  if (isLinkProps(props)) {
    return (
      <Link to={props.to} className={props.textOnly ? "button--text-only" : ""}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={props.textOnly ? "button--text-only" : ""} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
