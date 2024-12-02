import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <h1 className="page-title">Learn Web development</h1>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
