// Really useful shortcuts:
// https://youtu.be/SqcY0GlETPk?t=1615

// Stopped here https://youtu.be/SqcY0GlETPk?t=2317

import { Fragment } from "react";

function ListGroup() {
  let items = ["Sydney", "New York", "Paris", "London", "Tokyo"];
  items = [];
  return (
    <Fragment>
      <h1>My Unordered List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
