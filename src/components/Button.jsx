export default function Button({ title }) {
  return (
    <button
      onClick={() => alert("CIAO")}
      type="button"
      className="filters-button"
    >
      {title}
    </button>
  );
}
