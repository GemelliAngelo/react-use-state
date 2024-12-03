import languagesData from "../data/languages";
import Button from "./Button";

export default function Filters({
  setTitle,
  setDescription,
  status,
  setStatus,
}) {
  return (
    <div className="filters">
      <ul className="filters-list">
        {languagesData.map((language) => {
          return (
            <li key={language.id}>
              <Button
                title={language.title}
                setTitle={setTitle}
                description={language.description}
                setDescription={setDescription}
                status={status}
                setStatus={setStatus}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
