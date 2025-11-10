import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing username="github">
        Logo de Github
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} username="google">
        Logo de Google
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} username="facebook">
        Logo de Facebook
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} username="nba">
        Logo de Nba
      </TwitterFollowCard>
    </section>
  );
}
