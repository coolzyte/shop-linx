import bcrypt from 'bcryptjs';
export interface Product {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 29.99,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 14,
      countInStock: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 22.99,
      brand: 'Adidas',
      rating: 3.8,
      numReviews: 10,
      countInStock: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 89.99,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 14,
      countInStock: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Gold Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 9.99,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 14,
      countInStock: 11,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Blue Pants',
      slug: 'blue-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 11.99,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 9,
      countInStock: 11,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'White Pants',
      slug: 'white-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 12.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 12,
      countInStock: 11,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
};

export default data;
