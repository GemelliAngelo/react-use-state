export default function Button({
  title,
  setStatus,
  setTitle,
  description,
  setDescription,
}) {
  return (
    <button
      onClick={() => {
        setStatus("chosen");
        setTitle(title);
        setDescription(description);
      }}
      type="button"
      className="filters-button"
    >
      {title}
    </button>
  );
}
