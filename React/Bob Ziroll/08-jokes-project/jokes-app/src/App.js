import Joke from "./components/Joke"

function App() {
  return (
    <section className="jokes--entire-container d-flex flex-column mt-5">
      <Joke 
        setup={"Why did the chicken cross the road?"}
        punchLine={"To get to the other side"}
      />
      <Joke 
        setup={"What kind of candy do astronauts like?"}
        punchLine={"Mars Bars"}
      />
      <Joke 
        setup={"What's an egg's favorite vacation spot?"}
        punchLine={"New Yolk City"}
      />
      <Joke 
        setup={"I am so good at sleeping I can do it with my eyes closed"}
        punchLine={false}
      />
      <Joke 
        setup={"Why did the egg hide?"}
        punchLine={"It was a little chicken"}
      />
      <Joke 
        setup={"A man walked into his house and was delighted when he discovered that someone had stolen all of his lamps."}
        punchLine={""}
      />
    </section>
  );
}

export default App;
