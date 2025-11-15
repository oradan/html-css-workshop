import { ReactElement } from "react";

interface IOwnProps {
  title: string;
  paragraphText: string;
  button: ReactElement;
  className: string;
}
export default function Header(props: IOwnProps) {
  const { title, paragraphText, button, className } = props;
  return (
    <header className={"header " + className}>
      <div className="header-content">
        <h1>{title}</h1>
        <p>{paragraphText}</p>
        {button}
      </div>
    </header>
  );
}
