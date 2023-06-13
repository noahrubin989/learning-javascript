// Really useful shortcuts:
// https://youtu.be/SqcY0GlETPk?t=1615

// Stopped here https://youtu.be/SqcY0GlETPk?t=2317

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

import { Fragment, useState } from "react";

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // react hook (tells reacgt that we have a component with a state that'll change over time)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item} (at index {index})
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
