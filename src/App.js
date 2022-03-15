import * as React from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import "./App.css";
import Data from "./Components/Data";

function App() {
  const [products, setProducts] = useState(0);
  const foo = () => setProducts(products + 1);
  return (
    <>
      <ProductItem prop1={products} funct1={foo} />
      <Data />
    </>
  );
}
export default App;
