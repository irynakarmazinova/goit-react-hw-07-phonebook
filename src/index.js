import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";
// import { store, persistor } from 'redux/store';
import { store } from "./redux/store";
import "modern-normalize/modern-normalize.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
