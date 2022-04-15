import React from "react";
import { AppProvider } from "./context";
import Demo14 from "./Demo14";
import "./Demo14.scss";
const App = () => {
  return (
    <AppProvider>
      <Demo14 />
    </AppProvider>
  );
};

export default App;
