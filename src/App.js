import * as React from "react";
import "./App.css";
import Data from "./Components/Data";
import { useState, useEffect } from "react";

function App() {
  
  return (
    <>
      <Data />
    </>
  );
}
export default App;

// Draft
// import * as React from "react";
// import "./App.css";
// import Data from "./Components/Data";
// import { useState, useEffect } from "react";

// function App() {
//   const [data, setState] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://api.harvardartmuseums.org/gallery?apikey=5858ca01-d093-45fd-8ba8-5ab8317ab101"
//     )
//       .then((res) => res.json())
//       .then((data) =>
//         setState(
//           data.records.map(({ galleryid }) => {
//             return galleryid;
//           })
//         )
//       );
//   }, []);
//   return (
//     <>
//       <Data data={data} />
//     </>
//   );
// }
// export default App;
