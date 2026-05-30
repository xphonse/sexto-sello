const Button = ({
  text,
  url,
  w = "32",
  variant = "secondary",
}: {
  text: string;
  url: string;
  w?: string;
  variant?: "primary" | "secondary";
}) => {
  const variantClasses =
    variant === "primary"
      ? "bg-accent text-accent-text hover:opacity-90"
      : "border border-border text-text bg-transparent hover:bg-surface";

  return (
    <a href={url}>
      <button
        className={`m-2 p-4 w-${w} rounded-pill truncate ${variantClasses}`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
