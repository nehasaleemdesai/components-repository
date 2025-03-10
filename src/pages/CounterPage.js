import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const HANDLE_SUBMIT = "handle_submit";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: action.payload,
      // };
      state.valueToAdd = action.payload;
      return;
    case HANDLE_SUBMIT:
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0,
      // };
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      // return state;
      return;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: HANDLE_SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Add a lot!
          <input
            value={state.valueToAdd || ""}
            onChange={handleChange}
            type="number"
            className="p-1 m-3 bg-gray-50 border border-gray-300"
          />
        </label>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
