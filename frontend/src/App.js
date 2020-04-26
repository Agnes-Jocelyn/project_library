import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from './reducers'
import Navbar from "./components/Navbar";
import Add from "./components/Library/Add";
import Main from "./components/Library/Main";

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/">
            <Add/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
