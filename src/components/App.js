import { useState, useReducer } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increaseCount() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function decraaseCount() {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    return (
        <div className="container">
            <div className="mainCircle">
                <span>{state.count}</span>
                <div className="decButton" onClick={decraaseCount}>
                    -
                </div>
                <div className="incButton" onClick={increaseCount}>
                    +
                </div>
            </div>
        </div>
    );
}

export default App;
