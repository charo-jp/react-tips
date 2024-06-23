import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { useRef, forwardRef } from "react";
import Form from "./components/Form";

export default function App() {
  const input = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };

  return (
    <main>
      <Form onSave={handleSave}>
        <Input id="name" label="Your name" ref={input} />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button>Click me</Button>
        </p>
      </Form>
    </main>
  );
}
