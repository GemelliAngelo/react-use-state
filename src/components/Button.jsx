export default function Button({ title, setStatus, setTitle }) {
  return (
    <button
      onClick={() => {
        setStatus("chosen");
        setTitle(title);
      }}
      type="button"
      className="filters-button"
    >
      {title}
    </button>
  );
}
