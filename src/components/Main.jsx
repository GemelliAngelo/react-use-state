import { useState } from "react";
import Filters from "./Filters";
import Card from "./Card";
import languagesData from "../data/languages";

export default function Main() {
  const [data, setData] = useState();

  const statusChange = (status) => {
    setData(status);
  };

  return (
    <main>
      <div className="container">
        <Filters status={data} setStatus={statusChange} />
        {languagesData.map((language) => (
          <Card
            key={language.id}
            id={language.id}
            title={language.title}
            description={language.description}
            setStatus={statusChange}
            status={data}
          />
        ))}
      </div>
    </main>
  );
}
