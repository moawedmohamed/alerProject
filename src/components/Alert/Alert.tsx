import { ReactNode } from "react";
import "./Style.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../types";
export interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}
function Alert({ type, icon, title, description, children }: IProps) {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>

        <X className="closer" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
}
export default Alert;
