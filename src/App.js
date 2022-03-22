import * as React from "react";
import "./App.css";
import Data from "./Components/Data";
import Card from "./Components/Card";
import { countCtx } from "./context.js";

function App() {

  return (
    <>
      <Card />
      <countCtx.Provider value={true} >
        
        <Data />
      </countCtx.Provider>
    </>
  );
}
export default App;
