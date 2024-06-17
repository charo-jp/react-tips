import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

export default function App() {
  return (
    <main>
      <Input id="name" label="Your name" />
      <Input id="age" label="Your age" type="number" />
      <Container as={Button}>Click me</Container>
    </main>
  );
}
