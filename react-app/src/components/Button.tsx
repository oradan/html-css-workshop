import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonType } from "../dtos/Enums";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IOwnProps {
  label: string;
  buttonType: ButtonType;
  className?: string;
  iconClassName?: string;
  icon?: IconDefinition;
  onClick?: () => void;
}

export default function Button(props: IOwnProps) {
  const { label, buttonType, icon, className, onClick } = props;
  return (
    <button
      className={"btn " + "btn-" + buttonType + (className || "")}
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className={props.iconClassName || ""} />
      )}
      {` `}
      {label}
    </button>
  );
}
