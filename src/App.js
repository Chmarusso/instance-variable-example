import React from "react";
import "./styles.css";

export default function App() {
  const firstRender = React.useRef(true);
  const [spanWidth, setSpanWidth] = React.useState(100);

  const increase = () => setSpanWidth(spanWidth + 5);

  const spanRef = node => {
    if (!node) return;
    node.style.width = `${spanWidth}px`;
    if (spanWidth > 120) node.style.background = "yellow";
    if (spanWidth > 150) node.style.background = "red";
    if (spanWidth > 170) node.style.background = "black";
  };

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      console.log("first render");
    } else {
      console.log("re-render");
    }
  });

  return (
    <div className="App">
      <button onClick={increase}>increase span</button>
      <span ref={spanRef} />
    </div>
  );
}
