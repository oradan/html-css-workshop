import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CarDto } from "../../dtos/CarDto";
import CarOptionItem from "./CarOptionItem";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface IOwnProps {
  car: CarDto;
}

export default function CarCard(props: IOwnProps) {
  const { car } = props;

  return (
    <div className={"car-item " + (car.addedToFavourites ? " favorited" : "")}>
      <div className="car-image-container">
        <img src={car.image} alt={car.imageAlt} className="car-image" />
        <div className="favorite-heart">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className="car-specs-column">
        <h3 className="car-title">{car.title}</h3>
        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-label">Model Year:</span>
            <span className="spec-value">{car.specifications.modelYear}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Mileage:</span>
            <span className="spec-value">{car.specifications.mileage}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Engine:</span>
            <span className="spec-value">{car.specifications.engine}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Power:</span>
            <span className="spec-value">{car.specifications.power}</span>
          </div>
        </div>
        <p className="car-description">{car.description}</p>
      </div>
      <div className="car-actions-column">
        <div className="price-section">
          <span className="price" data-base-price="89900">
            {car.pricing.totalPriceFormatted}
          </span>
          <div className="price-breakdown">
            <span className="base-price">
              Base: {car.pricing.basePriceFormatted}
            </span>
            <span className="options-total">
              Options: {car.pricing.optionTotalPriceFormatted}
            </span>
          </div>
        </div>
        <div className="options-section">
          <h4 className="options-title">Available Options</h4>
          <div className="options-list">
            {car.options.map((option, index) => (
              <CarOptionItem car={car} key={index} option={option} />
            ))}
          </div>
          <div className="car-actions">
            {/* <MyButton
              icon={faHeart}
              text={
                car.addedToFavourites
                  ? "Added to favorites "
                  : "Add to Favorites"
              }
              className={car.addedToFavourites ? " favorited" : ""}
              iconClassName={car.addedToFavourites ? "favorited" : ""}
              buttonType={ButtonType.Primary}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
