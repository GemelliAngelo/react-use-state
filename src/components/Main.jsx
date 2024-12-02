import Filters from "./Filters";
import Card from "./Card";
import languagesData from "../data/languages";

export default function Main() {
  return (
    <main>
      <div className="container">
        <Filters />
        {languagesData.map((language) => (
          <Card
            key={language.id}
            id={language.id}
            title={language.title}
            description={language.description}
          />
        ))}
      </div>
    </main>
  );
}
