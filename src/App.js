import { React, useEffect, useState } from "react";
import "./App.css";
import Data from "./Components/Data";
import Card from "./Components/Card";
import Loader from "./Components/Spinner";

function App() {
  const [data, setData] = useState(null);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => setData(prod.map((data) => ({ ...data, count: 0 }))));
  }, []);
  const addCount = (id) => {
    setData(
      data.map((elem) =>
        elem.id === id ? { ...elem, count: elem.count + 1 } : elem
      )
    );
  };

  function addToCard(selectedProduct) {
    card.findIndex((cardContent) => cardContent.id === selectedProduct.id) !==
    -1
      ? setCard((prev) =>
          prev.map((cardContent) =>
            cardContent.id === selectedProduct.id
              ? { ...cardContent, count: selectedProduct.count }
              : cardContent
          )
        )
      : setCard((prev) => [...prev, selectedProduct]);
    console.log(...card);
  }
  function removeFromCard(item) {
    setCard((prev) => prev.filter((element) => element.id !== item.id));

    console.log(item);
  }
  const decreaseCount = (id) => {
    setData(
      data.map((elem) =>
        elem.id === id && elem.count > 0
          ? { ...elem, count: elem.count - 1 }
          : elem
      )
    );
  };
  return (
    <>
      <Card />
      {card.map((product, index) => (
        <li className="cardItem">
          <div key={index}>{product.id}</div>
          <img alt="cardpicture" src={product.image} />
          <div>{product.price}</div>
          <li>{product.count}</li>
          <button onClick={() => removeFromCard(product)}>Delete</button>
        </li>
      ))}
       {data ? <Data
        products={data}
        addCount={addCount}
        decreaseCount={decreaseCount}
        addToCard={addToCard}
      /> : <Loader />}
      
    </>
  );
}
export default App;
