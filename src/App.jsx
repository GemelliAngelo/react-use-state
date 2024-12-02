import { useState } from "react";
import languagesData from "./data/languages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <h1>Learn Web development</h1>
      </header>
      <main>
        <div className="container">
          <div className="filters">
            <ul className="filters-list">
              {languagesData.map((language) => {
                return (
                  <li key={language.id}>
                    <button type="button" className="filters-button">
                      {language.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {languagesData.map((language) => (
            <div className="card" key={language.id}>
              <h2 className="card-title">{language.title}</h2>
              <p className="card-description">{language.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
