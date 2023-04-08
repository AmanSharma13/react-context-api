import { faker } from "@faker-js/faker";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.business(250, 250),
  }));

  const [products] = useState(productsArray);

  // console.log(products);
  return (
    <div className="product-container">
      {products.map((product) => (
        // <p key={product.id}>{product.name}</p>
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
