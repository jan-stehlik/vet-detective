import { useGame } from "./context/GameContext";
import { TitleScreen } from "./components/TitleScreen";
import { GameScreen } from "./components/GameScreen";
import { SummaryOverlay } from "./components/SummaryOverlay";

export default function App() {
  const { state } = useGame();

  if (state.screen === "title") return <TitleScreen />;
  if (state.screen === "summary") return <SummaryOverlay />;
  return <GameScreen />;
}
