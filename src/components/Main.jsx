import { useState } from "react";
import Filters from "./Filters";
import Card from "./Card";

export default function Main() {
  const [data, setData] = useState();

  const statusChange = (status) => {
    setData(status);
  };

  const [title, setTitle] = useState();

  const titleChange = (title) => {
    setTitle(title);
  };

  const [description, setDescription] = useState();

  const descriptionChange = (description) => {
    setDescription(description);
  };

  return (
    <main>
      <div className="container">
        <Filters
          title={title}
          setTitle={titleChange}
          status={data}
          setStatus={statusChange}
          setDescription={descriptionChange}
        />
        <Card title={title} status={data} description={description} />
      </div>
    </main>
  );
}
