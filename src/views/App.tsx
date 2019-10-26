import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import SearchBar from "../components/organisms/SearchBar";
import MovieBox from "../components/organisms/MovieBox";
import reducer from "../reducer";

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(reduxThunk)
)(createStore);
export const store = createStoreWithMiddleware(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <MovieBox />
    </Provider>
  );
};

export default App;
