import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to Fake Store!</h1>
      </div>
      <div>
        <p className="description">
          Browser our store to find a variety of fake items! Navigate by using
          the links above.
        </p>
      </div>
    </div>
  );
}
