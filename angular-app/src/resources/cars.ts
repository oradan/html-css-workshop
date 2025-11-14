import { CarDto } from "../app/data-type/car-data";

export const cars: CarDto[] = [
  {
    title: 'Porsche Taycan',
    image: 'assets/img_1.jpg',
    imageAlt: 'Porsche Taycan',
    price: 89900,
    specifications: {
      modelYear: '2024',
      mileage: '5,200 miles',
      engine: 'Dual Electric Motors',
      power: '560 HP',
    },
    description:
      'The Porsche Taycan represents the future of luxury electric performance. With lightning-fast acceleration and exceptional build quality.',
    options: [
      {
        name: 'Premium Paint',
        price: 2500,
        selected: false,
      },
      {
        name: 'Performance Package',
        price: 5200,
        selected: false,
      },
      {
        name: 'Carbon Fiber Interior',
        price: 3800,
        selected: false,
      },
      {
        name: 'Extended Warranty',
        price: 2100,
        selected: false,
      },
    ],
    addedToFavorites: false,
  },
  {
    title: 'Porsche Panamera',
    image: 'assets/img_2.jpg',
    imageAlt: 'Porsche Panamera',
    price: 112500,
    specifications: {
      modelYear: '2023',
      mileage: '12,800 miles',
      engine: '4.0L V8 Twin-Turbo',
      power: '630 HP',
    },
    description:
      'The Porsche Panamera combines luxury sedan comfort with sports car performance. Exceptional power and refined craftsmanship.',
    options: [
      {
        name: 'Sport Chrono Package',
        price: 3700,
        selected: false,
      },
      {
        name: 'Panoramic Roof',
        price: 2890,
        selected: false,
      },
      {
        name: 'Premium Audio',
        price: 4200,
        selected: false,
      },
      {
        name: 'Adaptive Cruise',
        price: 1950,
        selected: false,
      },
    ],
    addedToFavorites: false,
  },
  {
    title: 'Mercedes-AMG GT',
    image: 'assets/img_3.jpg',
    imageAlt: 'Mercedes-AMG GT',
    price: 138200,
    specifications: {
      modelYear: '2024',
      mileage: '3,100 miles',
      engine: '4.0L V8 Biturbo',
      power: '577 HP',
    },
    description:
      'The Mercedes-AMG GT embodies racing heritage with aggressive styling and powerful performance capabilities.',
    options: [
      {
        name: 'AMG Track Package',
        price: 6500,
        selected: false,
      },
      {
        name: 'Carbon Fiber Trim',
        price: 3200,
        selected: false,
      },
      {
        name: 'Ceramic Brakes',
        price: 8900,
        selected: false,
      },
      {
        name: 'Exclusive Interior',
        price: 4800,
        selected: false,
      },
    ],
    addedToFavorites: false,
  },
  {
    title: 'BMW M4 Competition',
    image: 'assets/img_4.jpg',
    imageAlt: 'BMW M4 Competition',
    price: 95400,
    specifications: {
      modelYear: '2023',
      mileage: '8,750 miles',
      engine: '3.0L I6 Twin-Turbo',
      power: '503 HP',
    },
    description:
      'The BMW M4 Competition represents peak performance engineering with track-focused precision and cutting-edge technology.',
    options: [
      {
        name: 'M Performance Parts',
        price: 4500,
        selected: false,
      },
      {
        name: 'Carbon Fiber Roof',
        price: 3600,
        selected: false,
      },
      {
        name: 'Harman Kardon Audio',
        price: 2300,
        selected: false,
      },
      {
        name: 'Driver Assistance',
        price: 1800,
        selected: false,
      },
    ],
    addedToFavorites: false,
  },
  {
    title: 'Audi RS6 Avant',
    image: 'assets/img_5.jpg',
    imageAlt: 'Audi RS6 Avant',
    price: 127800,
    specifications: {
      modelYear: '2024',
      mileage: '6,400 miles',
      engine: '4.0L V8 TFSI',
      power: '591 HP',
    },
    description:
      'The Audi RS6 Avant perfectly balances performance and practicality with supercar-level acceleration and estate versatility.',
    options: [
      {
        name: 'RS Sport Package',
        price: 5800,
        selected: false,
      },
      {
        name: 'Matrix LED Lights',
        price: 2400,
        selected: false,
      },
      {
        name: 'Bang & Olufsen Audio',
        price: 3900,
        selected: false,
      },
      {
        name: 'Dynamic Package',
        price: 4200,
        selected: false,
      },
    ],
    addedToFavorites: false,
  },
  {
    title: 'Ferrari 488 GTB',
    image: 'assets/img_6.jpg',
    imageAlt: 'Ferrari 488 GTB',
    price: 245900,
    specifications: {
      modelYear: '2022',
      mileage: '4,200 miles',
      engine: '3.9L V8 Twin-Turbo',
      power: '661 HP',
    },
    description:
      'The Ferrari 488 GTB is a masterpiece of Italian engineering with stunning aesthetics and incredible performance.',
    options: [
      {
        name: 'Racing Package',
        price: 12500,
        selected: false,
      },
      {
        name: 'Carbon Fiber Aero',
        price: 8900,
        selected: false,
      },
      {
        name: 'Premium Interior',
        price: 15200,
        selected: false,
      },
      {
        name: 'Telemetry System',
        price: 6800,
        selected: false,
      },
    ],
    addedToFavorites: false,
  },
];
