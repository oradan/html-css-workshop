export interface CarSpecificationsDto {
  modelYear: string;
  mileage: string;
  engine: string;
  power: string;
}


export interface CarOptionDto {
  name: string;
  price: number;
  selected:boolean
}

export interface CarDto {
  title: string;
  image: string;
  imageAlt: string;
  price: number;
  specifications: CarSpecificationsDto;
  description: string;
  options: CarOptionDto[];
  addedToFavorites: boolean;
}
