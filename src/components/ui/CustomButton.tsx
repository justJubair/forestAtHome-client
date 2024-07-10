import { ReactNode } from "react";
import { Button } from "./button";

const CustomButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button className="bg-primary-green hover:bg-hover">{children}</Button>
  );
};
export default CustomButton;
