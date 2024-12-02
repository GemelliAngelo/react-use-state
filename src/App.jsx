import { useState } from "react";

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
              <li>
                <button type="button" className="filters-button">
                  HTML
                </button>
              </li>
              <li>
                <button type="button" className="filters-button">
                  CSS
                </button>
              </li>
              <li>
                <button type="button" className="filters-button">
                  Javascript
                </button>
              </li>
              <li>
                <button type="button" className="filters-button">
                  Node.js
                </button>
              </li>
              <li>
                <button type="button" className="filters-button">
                  Express
                </button>
              </li>
              <li>
                <button type="button" className="filters-button">
                  ReactJS
                </button>
              </li>
            </ul>
          </div>
          <div className="card">
            <h2 className="card-title">HTML</h2>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ipsa atque voluptates itaque eaque culpa, esse quas quis, magni
              sed illo maxime aspernatur ratione! Quaerat dolores dicta
              excepturi. Non, natus!
            </p>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
