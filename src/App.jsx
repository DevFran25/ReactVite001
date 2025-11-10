import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const format = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        username="github"
        name="Logo de Github"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing={false}
        username="google"
        name="Logo de Google"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        username="facebook"
        name="Logo de Facebook"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        username="nba"
        name="Logo de NBA"
      />
    </section>
  );
}
