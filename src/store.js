import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

// create your reducer
const reducer = (state = { material: null, size: null }, action) => {
  switch (action.type) {
    case "MATERIAL":
      return {
        ...state,
        material: action.payload,
        size: null,
      };
    case "SIZE":
      return {
        ...state,
        size: action.payload,
        material: null,
      };
    default:
      return state;
  }
};

// return new Redux server-side Store instance each time it's called, also provides the Request and Response objects as options to makeStore
const makeStore = () => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
