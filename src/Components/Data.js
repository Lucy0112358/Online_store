import React from "react";
import { useState, useEffect } from "react";

export default function Data() {
  const [data, setState] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.harvardartmuseums.org/gallery?apikey=5858ca01-d093-45fd-8ba8-5ab8317ab101"
    )
      .then((res) => res.json())
      .then((data) =>
        setState(
          data.records.map(({ galleryid }) => {
            return galleryid;
          })
        )
      );
  }, []);

  console.log(data);
  return (
    <>
      <div></div>
      {data.map(({ galleryid }) => {
        return <div>{galleryid}</div>;
      })}
    </>
  );
}
