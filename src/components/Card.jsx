export default function Card({ status, setStatus, title, description }) {
  console.log(status);

  return (
    <div className={"card " + status}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}
