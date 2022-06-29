export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Category {
  id: number;

  name: string;

  image: string;
}

export interface Product {
  id: number;

  title: string;

  price: number;

  description: string;

  category: Category;

  images: Array<string>;
}
