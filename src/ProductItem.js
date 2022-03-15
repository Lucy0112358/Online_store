import React from "react";

export default function ProductItem({ prop1, funct1 }) {
  return (
    <>
      <div onClick={funct1}>{prop1}</div>
    </>
  );
}
