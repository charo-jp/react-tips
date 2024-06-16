import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Input id="name" label="Your name" />
      <Input id="age" label="Your age" type="number" />
      <Button >A Button</Button>
    </main>
  );
}
