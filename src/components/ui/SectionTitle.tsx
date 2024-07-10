import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2 className="text-4xl text-center text-primary-green font-bold oleo-script-regular">
        {" "}
        {children}{" "}
      </h2>
    </div>
  );
};
export default SectionTitle;
