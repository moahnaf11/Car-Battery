import { useState } from "react";
import { Header } from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;