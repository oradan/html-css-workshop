import type { CarDto, CarOptionDto } from "../../dtos/CarDto";

interface IOwnProps {
  car: CarDto;
  option: CarOptionDto;
}

export default function CarOptionItem(props: IOwnProps) {
  const { car, option } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Implement option change handling
  };

  return (
    <div className="option-item">
      <label className="option-checkbox">
        <input
          type="checkbox"
          checked={option.selected}
          className="option-check"
          data-price={option.price}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <span className="option-name">{option.name}</span>
      </label>
      <span className="option-price">+${option.priceFormatted}</span>
    </div>
  );
}
