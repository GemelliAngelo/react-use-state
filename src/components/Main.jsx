import { useState } from "react";
import Filters from "./Filters";
import Card from "./Card";
import languagesData from "../data/languages";

export default function Main() {
  const [data, setData] = useState();

  const statusChange = (status) => {
    setData(status);
  };

  const [title, setTitle] = useState();

  const titleChange = (title) => {
    setTitle(title);
  };

  return (
    <main>
      <div className="container">
        <Filters
          title={title}
          setTitle={titleChange}
          status={data}
          setStatus={statusChange}
        />
        <Card title={title} status={data} />
      </div>
    </main>
  );
}
