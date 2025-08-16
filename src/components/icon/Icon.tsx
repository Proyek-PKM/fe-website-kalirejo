import type { GoIcon } from "../types/Icon.types";
import type { ReactNode } from "react";

export default function Icon({ icon }: GoIcon): ReactNode {
  return <span className="material-symbols-rounded">{icon}</span>;
}
