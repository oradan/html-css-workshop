import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonType } from "../dtos/Enums";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IOwnProps {
  label: string;
  buttonType: ButtonType;
  icon?: IconDefinition;
  onClick?: () => void;
}

export default function Button(props: IOwnProps) {
  const { label, buttonType, icon, onClick } = props;
  return (
    <button className={"btn " + "btn-" + buttonType} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
      {` `}
      {label}
    </button>
  );
}
