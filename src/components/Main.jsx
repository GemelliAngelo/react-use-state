import { useState } from "react";
import Filters from "./Filters";
import Card from "./Card";

export default function Main() {
  const [title, setTitle] = useState();

  const titleChange = (title) => {
    setTitle(title);
  };

  const [description, setDescription] = useState();

  const descriptionChange = (description) => {
    setDescription(description);
  };

  const [status, setStatus] = useState();

  const statusChange = (status) => {
    setStatus(status);
  };

  return (
    <main>
      <div className="container">
        <Filters
          title={title}
          setTitle={titleChange}
          setDescription={descriptionChange}
          status={status}
          setStatus={statusChange}
        />
        <Card title={title} description={description} />
      </div>
    </main>
  );
}
