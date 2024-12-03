export default function Card({ title, description }) {
  return (
    <div className={"card"}>
      <h2 className="card-title">
        {title ? title : "Nessun Filtro Selezionato"}
      </h2>
      <hr />
      <p className="card-description">
        {description ? description : "Seleziona un Filtro per continuare"}
      </p>
    </div>
  );
}
