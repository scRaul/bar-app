"use client";
import "./page.css";
import PolaroidCard from "@/components/polaroidCard";
import DrinkInfo from "@/components/drinkInfo";
import { getAll } from "../../controllers/request";
import Drink from "../../interfaces/iDrink";

import React, { useEffect, useState } from "react";
import AnimatedLine from "@/components/animatedLine";

const DrinkList: React.FC = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  useEffect(() => {
    const getDrinkList = async () => {
      try {
        let drinkJson = await getAll();
        if (!drinkJson) {
          throw new Error("failed to fetch drinks");
        }
        drinkJson = drinkJson.drinks;
        const list: Drink[] = Object.values(drinkJson);
        setDrinks(list);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getDrinkList();
  }, []);

  const openDrinkInfo = (drink: Drink) => {
    setSelectedDrink(drink);
  };
  const closeDrinkInfo = () => {
    setSelectedDrink(null);
  };

  return (
    <>
      <div className={`drinks ${!selectedDrink ? "" : "blur"}`}>
        {drinks.length > 0 ? (
          drinks.map((drink) => (
            <PolaroidCard
              key={drink.downloadURL}
              imageSrc={drink.downloadURL}
              name={drink.name}
              price={drink.price}
              onClick={() => openDrinkInfo(drink)}
            />
          ))
        ) : (
          <AnimatedLine />
        )}
      </div>

      {selectedDrink && (
        <DrinkInfo drink={selectedDrink} onClose={closeDrinkInfo} />
      )}
    </>
  );
};

export default DrinkList;
