import { ReactNode } from "react";

const Paragraph = ({
  children,
  align = "center",
}: {
  children: ReactNode;
  align?: "center" | "left";
}) => {
  const alignClass =
    align === "left" ? "text-left max-w-prose" : "text-center w-96";

  return (
    <div className={`mb-8 text-text leading-[1.65] ${alignClass}`}>
      {children}
    </div>
  );
};

export default Paragraph;
