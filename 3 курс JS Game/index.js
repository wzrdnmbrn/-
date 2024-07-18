function App() {
  const [screen, setScreen] = React.useState("Menu");
  const [gameData] = React.useState({
    counts: 0,
    time: 0,
  });

  return (
    <div className="App">
      <div>
        {screen === "Game" ? (
          <Game setScreen={setScreen} gameData={gameData} />
        ) : screen === "Rating" ? (
          <Rating setScreen={setScreen} gameData={gameData} />
        ) : screen === "Menu" ? (
          <Menu setScreen={setScreen} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
