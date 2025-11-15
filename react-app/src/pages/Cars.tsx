import { useEffect, useState } from "react";
import type { CarDto, CarOptionDto } from "../dtos/CarDto";
import Header from "../components/Header";
import CarCard from "../components/cars/CarCard";

export default function CarList() {
  const [cars, setCars] = useState<CarDto[]>([]);
  useEffect(() => {
    fetch("/resources/cars.json")
      .then((response) => response.json())
      .then((data) => {
        // Initialize totalPrice with basePrice for each car
        const initializedCars = data.map((car: CarDto) => ({
          ...car,
          addedToFavourites: false,
          pricing: {
            ...car.pricing,
            totalPrice: car.pricing.basePrice,
            totalPriceFormatted: car.pricing.basePriceFormatted,
            optionTotalPrice: 0,
            optionTotalPriceFormatted: "$0",
          },
          options: car.options.map((option: CarOptionDto) => ({
            ...option,
            selected: false,
          })),
        }));
        setCars(initializedCars);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const addCarToFavourites = (car: CarDto) => {
    setCars((prevCars) =>
      prevCars.map((c) =>
        c.title === car.title
          ? { ...c, addedToFavourites: !c.addedToFavourites }
          : c
      )
    );
  };

  const handleOptionChange = (
    car: CarDto,
    option: CarOptionDto,
    isSelected: boolean
  ) => {
    setCars((prevCars) =>
      prevCars.map((c) => {
        if (c.title === car.title) {
          // Update the selected state of the option
          const updatedOptions = c.options.map((opt) =>
            opt.name === option.name ? { ...opt, selected: isSelected } : opt
          );

          // Calculate new total price from selected options
          let optionsTotal = 0;
          updatedOptions
            .filter((opt) => opt.selected)
            .forEach((opt) => (optionsTotal += opt.price));

          const newTotalPrice = c.pricing.basePrice + optionsTotal;

          return {
            ...c,
            options: updatedOptions,
            pricing: {
              ...c.pricing,
              totalPrice: newTotalPrice,
              totalPriceFormatted: `$${newTotalPrice.toLocaleString()}`,
              optionTotalPrice: optionsTotal,
              optionTotalPriceFormatted: `$${optionsTotal.toLocaleString()}`,
            },
          };
        }
        return c;
      })
    );
  };

  return (
    <>
      <Header
        title="Discover Amazing Cars"
        paragraphText="Explore our comprehensive collection of vehicles from every category and era"
        button={
          <a href="#collection" className="btn btn-orange">
            Browse Collection
          </a>
        }
        className="header-bg-cars"
      />
      <main className="main-content">
        <div className="title-description-block">
          <h1 className="page-title">Car Collection</h1>
          <p className="page-subtitle">
            Explore our comprehensive collection of vehicles, from classic
            beauties to cutting-edge modern machines. Discover detailed
            specifications, features, and everything you need to know about each
            car.
          </p>
        </div>

        <div className="car-showcase" id="collection">
          {cars.map((car) => {
            return (
              <CarCard
                key={car.title}
                car={car}
                addCarToFavourites={addCarToFavourites}
                handleOptionChange={handleOptionChange}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
