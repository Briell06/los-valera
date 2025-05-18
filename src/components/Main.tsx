import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return <main className="container mx-auto">{children}</main>;
}

export default Main;
