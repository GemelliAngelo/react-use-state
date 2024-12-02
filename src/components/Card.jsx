export default function Card({ status, title, description }) {
  return (
    <div className={"card " + status}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}
