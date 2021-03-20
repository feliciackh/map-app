import { createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// create your reducer
const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
      // if (action.payload.app === 'init') delete action.payload.app;
      // if (action.payload.page === 'init') delete action.payload.page;
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case "SERVER_ACTION":
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case "CLIENT_ACTION":
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return state;
  }
};

// return new Redux server-side Store instance each time it's called, also provides the Request and Response objects as options to makeStore
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
