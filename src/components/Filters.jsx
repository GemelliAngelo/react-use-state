import languagesData from "../data/languages";
import Button from "./Button";

export default function Filters() {
  return (
    <div className="filters">
      <ul className="filters-list">
        {languagesData.map((language) => {
          return (
            <li key={language.id}>
              <Button title={language.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
