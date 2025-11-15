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
      <main className="main-content">
        <div className="title-description-block dashed-border">
          <h2 className="page-title">Your Gateway to Automotive Excellence</h2>
          <p className="page-subtitle">
            Stay connected with the automotive world through our comprehensive
            platform featuring the latest news, detailed car reviews, and
            everything you need to know about the vehicles that drive our
            passion.
          </p>
        </div>
        <div className="features">
          <div className="card">
            <h3>Latest News</h3>
            <p>
              Stay updated with breaking news from the automotive industry,
              including new releases, technology updates, and market trends.
            </p>
            <Button
              label="READ NEWS"
              buttonType={ButtonType.Primary}
              icon={faNewspaper}
              onClick={() => onClick("/news")}
            />
          </div>
          <div className="card featured">
            <h3>Car Collection</h3>
            <p>
              Explore our extensive database of vehicles from classNameic cars
              to modern supercars, with detailed specifications and reviews.
            </p>
            <Button
              label="Explore Cars"
              buttonType={ButtonType.Secondary}
              icon={faCar}
              onClick={() => onClick("/cars")}
            />
          </div>
          <div className="card">
            <h3>Expert Reviews</h3>
            <p>
              Read in-depth reviews and analysis from automotive experts to help
              you make informed decisions about your next vehicle.
            </p>
            <Button
              label="Btn with no action"
              buttonType={ButtonType.Primary}
            />
          </div>
        </div>
      </main>
    </>
  );
}
