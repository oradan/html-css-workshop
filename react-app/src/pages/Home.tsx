import { faCar, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { ButtonType } from "../dtos/Enums";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();

  const onClick = (linkTo: string) => {
    navigate(linkTo);
  };

  return (
    <>
      <Header
        title="Welcome to Car World"
        paragraphText="Discover the latest automotive trends, news, and the most exciting cars in the industry"
        button={
          <Button
            label="Explore Cars"
            buttonType={ButtonType.Orange}
            onClick={() => {
              navigate("/cars");
            }}
          />
        }
        className="header-bg-default"
      ></Header>
      <Button
        label="READ NEWS"
        buttonType={ButtonType.Primary}
        icon={faNewspaper}
        onClick={() => onClick("/news")}
      />
      <Button
        label="Explore Cars"
        buttonType={ButtonType.Secondary}
        icon={faCar}
        onClick={() => onClick("/cars")}
      />
      <Button label="Btn with no action" buttonType={ButtonType.Primary} />
    </>
  );
}
