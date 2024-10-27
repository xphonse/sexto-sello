const Button = ({
  text,
  url,
  w = "32",
}: {
  text: string;
  url: string;
  w?: string;
}) => {
  return (
    <a href={url}>
      <button
        className={`m-2 p-4  w-${w} border-opacity-100 border-solid border border-slate-400 rounded-full truncate`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
