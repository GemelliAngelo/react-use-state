export default function Button({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
}) {
  return (
    <button
      onClick={() => {
        setTitle(title);
        setDescription(description);
        setStatus(status ? "" : "active");
      }}
      type="button"
      className={"filters-button " + status}
    >
      {title}
    </button>
  );
}
