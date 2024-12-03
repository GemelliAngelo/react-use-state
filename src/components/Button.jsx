export default function Button({
  title,
  setTitle,
  description,
  setDescription,
}) {
  const handleState = (title, description) => {
    setTitle(title);
    setDescription(description);
  };
  return (
    <button
      onClick={() => {
        handleState(title, description);
      }}
      type="button"
      className={"filters-button"}
    >
      {title}
    </button>
  );
}
