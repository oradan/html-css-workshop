import type { CarDto, CarOptionDto } from "../../dtos/CarDto";

interface IOwnProps {
  car: CarDto;
  option: CarOptionDto;
  onOptionChange: (
    car: CarDto,
    option: CarOptionDto,
    isSelected: boolean
  ) => void;
}

export default function CarOptionItem(props: IOwnProps) {
  const { car, option, onOptionChange } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOptionChange(car, option, e.target.checked);
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
