import React from "react";
import "./App.css";

function App() {
  let myArray = ["message1", "message2", "message3"];
  return (
    <div className="App">
      {myArray.length > 0 && <p>You have {myArray.length} unread messages</p>}
    </div>
  );
}

export default App;
