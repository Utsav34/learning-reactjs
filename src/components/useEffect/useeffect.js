import { Button } from "@mui/material";
import { useEffect, useState } from "react";

// The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting
// After component render we can perform side effect any thing in component.

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  const Click = () => {
    setCount(count + 1);
  };
  const Clicks = () => {
    setCounts(counts + 1);
  };
  useEffect(() => {
    alert("useEffect Example");
    // it is a empty arrary run only first time page render in browser. after that never render.
  }, []);
  return (
    <>
       <h1>UseEffect Example</h1>
      <div className="color-change container">
      <h6>UseEffect</h6>
        <span>{count}</span>
        <Button  variant="contained" onClick={Click}>Click me</Button>
        <br></br>
        <span>{counts}</span>
        <Button  variant="contained"onClick={Clicks}>Click btn</Button>
      </div>
    </>
  );
};

export default UseEffect;
