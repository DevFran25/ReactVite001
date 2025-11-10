import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <>
      <TwitterFollowCard username="github" name="Logo de Github" />;
      <TwitterFollowCard username="google" name="Logo de Google" />;
      <TwitterFollowCard username="facebook" name="Logo de Facebook" />;
    </>
  );
}
