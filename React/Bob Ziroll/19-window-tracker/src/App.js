import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(
    // This will execute every time our app renders
    () => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((r) => r.json())
        .then((json) => setItems(json));
    },
    // values such that whenever they change, the code inside your hook is going to run,
    [resourceType]
  );
  return (
    <>
      <h1>Window width = {windowWidth}</h1>
      <hr />
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
        <h1>{resourceType}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
}

export default App;
