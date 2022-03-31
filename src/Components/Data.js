import { React, useRef } from "react";

export default function Data({ products, addCount, decreaseCount, addToCard }) {
  const reftest = useRef(null);
  const refPrice = useRef(null);

  return (
    <div>
      <div className="prodcontainer">
        {products.map((product, index) => (
          <div className={0}>
            <div className="prodid" key={index}>
              {product.id}
            </div>
            <img alt="alt" className="prodimage" src={product.image} />
            <div className="prodid" ref={reftest}>
              {product.price}
            </div>
            <div ref={refPrice}>{product.count}</div>
            <button onClick={() => addCount(product.id)}>+</button>
            <button onClick={() => decreaseCount(product.id)}>-</button>
            <button onClick={() => addToCard(product)}>Add to card </button>
          </div>
        ))}
      </div>
    </div>
  );
}
