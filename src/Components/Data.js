import React from "react";
import { useState, useEffect } from "react";
import "./data.css";
import Counter from "./Counter";

export default function Data() {
  const [data, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.harvardartmuseums.org/gallery?apikey=5858ca01-d093-45fd-8ba8-5ab8317ab101"
    )
      .then((res) => res.json())
      .then((info) => setState(info.records));
  }, []);

  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    marginBottom: "100px",
  };

  return (
    <div>
      {data.map(({ name, galleryid, url }, index) => (
        <div>
          <div key={index} className={name}>
            {name}
          </div>
          <div style={mystyle}>{galleryid}</div>
          <div>
            <Counter price={galleryid} />
          </div>
          <div>{url}</div>
          <button>Add to card </button>
        </div>
      ))}
      {console.log(data)}
    </div>
  );
}
