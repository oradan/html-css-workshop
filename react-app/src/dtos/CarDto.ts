export interface CarSpecificationsDto {
  modelYear: string;
  mileage: string;
  engine: string;
  power: string;
}

export interface CarPricingDto {
  basePrice: number;
  basePriceFormatted: string;
  totalPrice: number;
  totalPriceFormatted: string;
  optionTotalPrice: number;
  optionTotalPriceFormatted: string;
}

export interface CarOptionDto {
  name: string;
  price: number;
  priceFormatted: string;
  selected: boolean;
}

export interface CarDto {
  title: string;
  image: string;
  imageAlt: string;
  specifications: CarSpecificationsDto;
  description: string;
  pricing: CarPricingDto;
  options: CarOptionDto[];

  addedToFavourites?: boolean;
}
