import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { useRef, forwardRef } from "react";
import Form from "./components/Form";
import { type FormHandle } from "./components/Form";
export default function App() {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }
    customForm.current?.clear();
  };

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button>Click me</Button>
        </p>
      </Form>
    </main>
  );
}
