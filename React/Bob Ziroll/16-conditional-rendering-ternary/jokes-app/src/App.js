import Joke from "./components/Joke";
import jokesArr from "./data/jokesData";

function App() {
  let jokeElements = jokesArr.map((item, idx) => {
    return <Joke key={idx} setup={item.setup} punchLine={item.punchLine} />;
  });

  return (
    <section className="jokes--entire-container d-flex flex-column mt-5">
      {jokeElements}
    </section>
  );
}

export default App;
