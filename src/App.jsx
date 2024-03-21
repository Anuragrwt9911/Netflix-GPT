import Body from "./Components/Body";
import "./index.css";

import React from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
