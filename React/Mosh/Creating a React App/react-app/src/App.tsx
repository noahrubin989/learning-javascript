// . is the currerent folder
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sydney", "New York", "Paris", "London", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
