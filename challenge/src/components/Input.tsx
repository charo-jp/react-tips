import { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = (inputProps: InputProps) => {
  return <div>
    <label htmlFor=""></label>
    <input type="text" {...inputProps}/>
  </div>;
};

export default Input;
