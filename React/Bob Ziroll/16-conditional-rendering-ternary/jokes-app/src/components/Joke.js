import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  const toggleShown = () => {
    setIsShown((prev) => !prev);
  };

  let element = (
    <div className="card mx-auto">
      {/* If props.setup exists then show it in a strong tag inside a p tag  */}
      {props.setup && (
        <p>
          <strong>{props.setup}</strong>
        </p>
      )}
      {/* If the punchline exists return a fragment component */}
      {/* Inside of the fragment, if the state variable isShown is truthy then show the punchline otherwise show nothing */}
      {/* Then allow toggling to occur on the isShown state variable depending on our button clicks */}
      {props.punchLine && (
        <React.Fragment>
          {isShown && <p>{props.punchLine}</p>}
          <button className="toggle-btn" onClick={() => toggleShown()}>
            {isShown ? "Hide" : "Show"} PunchLine
          </button>
        </React.Fragment>
      )}
    </div>
  );
  return element;
}
