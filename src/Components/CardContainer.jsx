import React, { useState } from "react";

const initialFruits = [
  {
    id: "fruit1",
    title: "Apple",
    inStock: false,
  },
  {
    id: "fruit2",
    title: "Orange",
    inStock: false,
  },
];

const CardContainer = () => {
  const [fruits, setFruits] = useState(initialFruits);

  const handleUpdateFruits = (id) => {
    setFruits((prevFruits) =>
      prevFruits.map((fruit) => {
        return fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit;
      })
    );
  };

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li
            key={fruit.id}
            onClick={() => handleUpdateFruits(fruit.id)}
            style={{ textDecoration: fruit.inStock ? "none" : "line-through" }}
          >
            {fruit.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CardContainer;
