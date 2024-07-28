import { ReactNode } from 'react';

const Paragraph = ({ children }: { children: ReactNode }) => {
  return <div className="text-center mb-8 ">{children}</div>;
};

export default Paragraph;
