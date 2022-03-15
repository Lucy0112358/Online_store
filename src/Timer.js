// import React, { useState } from "react";
// import Users from "./Users";
// import "./App.css";

// import { Button } from "@nextui-org/react";

// import { Grid } from "@nextui-org/react";

// function Timer() {
//   const [count, setState] = useState(0);
//   const [intervalID, stopTimer] = useState();
//   const increment = () => setState((prev) => prev + 1);

//   function AddTime() {
//     stopTimer(setInterval(increment, 1000));
//   }

//   const decrement = () => stopTimer(clearInterval(intervalID));
//   return (
//     <div>
//       <div>Test</div>
//       <Users />
//       <div>{count}</div>
//       <Grid.Container gap={2}>
//         <Grid>
//           <Button color="gradient" auto onClick={!intervalID ? AddTime : null}>
//             Start
//           </Button>
//           <Button color="gradient" auto onClick={decrement}>
//             Stop
//           </Button>
//         </Grid>
//       </Grid.Container>
//     </div>
//   );
// }

// export default Timer;
