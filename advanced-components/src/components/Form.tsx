import { type ComponentPropsWithoutRef, type FormEvent, useRef, forwardRef, useImperativeHandle } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {

  const form = useRef<HTMLFormElement>(null);

  // used to enable api calling from outside of this components!
  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      }
    }
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    onSave(data);
  };
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref = {form}>
      {children}
    </form>
  );
});


export default Form;
