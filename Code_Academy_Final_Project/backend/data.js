import bcrypt from "bcryptjs";

const data = {
  products: [
    {
      name: "Nike shirt",
      category: "Shirts",
      image: "/images/product-01.jpg",
      price: 120,
      brand: "Nike",
      description: "High quality product",
      countInStock: 21,
    },
    {
      name: "Adidas shirt",
      category: "Shirts",
      image: "/images/product-02.jpg",
      price: 34,
      brand: "Nike",
      description: "High quality product",
      countInStock: 19,
    },
    {
      name: "Puma shirt",
      category: "Shirts",
      image: "/images/product-03.jpg",
      price: 56,
      brand: "Puma",
      description: "High quality product",
      countInStock: 0,
    },
    {
      name: "Gucci shirt",
      category: "Shirts",
      image: "/images/product-04.jpg",
      price: 400,
      brand: "Gucci",
      description: "High quality product",
      countInStock: 45,
    },
    {
      name: "Lacoste shirt",
      category: "Shirts",
      image: "/images/product-05.jpg",
      price: 200,
      brand: "Lacoste",
      description: "High quality product",
      countInStock: 3,
    },
  ],
  users: [
    {
      name: "Natiq",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Vusal",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
};

export default data;
