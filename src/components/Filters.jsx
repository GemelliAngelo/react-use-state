import languagesData from "../data/languages";
import Button from "./Button";

export default function Filters({ status, setStatus, setTitle }) {
  return (
    <div className="filters">
      <ul className="filters-list">
        {languagesData.map((language) => {
          return (
            <li key={language.id}>
              <Button
                status={status}
                setStatus={setStatus}
                title={language.title}
                setTitle={setTitle}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
