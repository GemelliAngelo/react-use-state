import { useState } from "react";
import languagesData from "./data/languages";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
