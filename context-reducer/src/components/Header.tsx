import Button from "./UI/Button.tsx";
import { useTimersContext } from "./store/timers-context.tsx";

export default function Header() {
  const timersCsx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersCsx.isRunning ? timersCsx.stopTimers : timersCsx.startTimers
        }
      >
        {timersCsx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
