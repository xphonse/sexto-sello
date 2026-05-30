const Button = ({
  text,
  url,
  size = "md",
  variant = "secondary",
}: {
  text: string;
  url: string;
  size?: "sm" | "md" | "full";
  variant?: "primary" | "secondary";
}) => {
  const variantClasses =
    variant === "primary"
      ? "bg-accent text-accent-text hover:opacity-90"
      : "border border-border text-text bg-transparent hover:bg-surface";

  // Full strings (not interpolated) so Tailwind's JIT always emits them.
  // "full" stays within the viewport on mobile and caps at 384px on desktop.
  const sizeClasses =
    size === "full" ? "w-full max-w-sm" : size === "sm" ? "w-16" : "w-32";

  return (
    <a href={url} className={`my-2 block ${sizeClasses}`}>
      <button className={`p-4 w-full rounded-pill truncate ${variantClasses}`}>
        {text}
      </button>
    </a>
  );
};

export default Button;
