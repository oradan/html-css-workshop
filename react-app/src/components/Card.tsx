import type { ReactElement } from "react";

interface IOwnProps {
  title: string;
  description: string;
  button?: ReactElement;
  imgSrc?: string;
  imgAlt?: string;
  featuredCard?: boolean;
}
export default function MyCard(props: IOwnProps) {
  const { title, description, button, featuredCard, imgAlt, imgSrc } = props;

  return (
    <div className={"card" + (featuredCard ? " featured" : "")}>
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="card-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {button}
    </div>
  );
}
