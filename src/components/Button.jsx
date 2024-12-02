export default function Button({ title, status, setStatus }) {
  console.log(status);

  return (
    <button
      onClick={() => setStatus("chosen")}
      type="button"
      className="filters-button"
    >
      {title}
    </button>
  );
}
