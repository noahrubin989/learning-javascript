import React from "react";

export default function Joke({setup, punchLine=true}) {
    let element = (
        <div className="card mx-auto">
            <p><strong>{setup}</strong></p>
            {punchLine && <p>{punchLine}</p>}
        </div>
    );
    return element;
}
