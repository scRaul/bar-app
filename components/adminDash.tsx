import "./adminDash.css";

import React, { useEffect, useState } from "react";
import Drink from "../interfaces/drink";
import { getAll } from "../controllers/request";
import PolaroidCard from "./adminCard";
import EditDrink from "./editDrink";
import AdminCard from "./adminCard";
import { deleteDrink } from "../controllers/request";
import { Martini, PlusCircle } from "lucide-react";

const AdminDash = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [newDrink, setNewDrink] = useState(false);

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
  useEffect(() => {
    getDrinkList();
  }, []);

  const openDrinkInfo = (drink: Drink) => {
    setSelectedDrink(drink);
  };
  const closeDrinkInfo = () => {
    setSelectedDrink(null);
    setNewDrink(false);
  };
  const openNewDrink = () => {
    setNewDrink(true);
  };
  const handleDeleteDrink = async (drinkName: string) => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.log("no tokenn found");
      return;
    }
    try {
      await deleteDrink(drinkName, token);
      setDrinks((prevDrinks) =>
        prevDrinks.filter((drink) => drink.name != drinkName)
      );
      await getDrinkList();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateDrink = async() => {
    alert("updated drink");
    await getDrinkList();
    closeDrinkInfo();
  };
  const handleAddNewDrink = async() => {
    alert("added a new Drink");
    await getDrinkList();
    closeDrinkInfo();
  };
  return (
    <main>
      <div className="pl" onClick={openNewDrink}>
        <Martini className="plus-button" size={50} />
        <PlusCircle className="plus" size={25} />
      </div>
      <hr></hr>

      <div className={`drinks ${selectedDrink || newDrink ? "blur" : ""}`}>
        {drinks.map((drink) => (
          <AdminCard
            key={drink.downloadURL}
            imagePath={drink.imagePath}
            downloadURL={drink.downloadURL}
            name={drink.name}
            price={drink.price}
            description={drink.description}
            ingredientList={drink.ingredientList}
            onEdit={() => openDrinkInfo(drink)}
            onDelete={() => handleDeleteDrink(drink.name)}
          />
        ))}
      </div>

      {selectedDrink && (
        <EditDrink
          drink={selectedDrink}
          onClose={closeDrinkInfo}
          onSave={handleUpdateDrink}
        />
      )}
      {newDrink && (
        <EditDrink
          onClose={closeDrinkInfo}
          onSave={handleAddNewDrink}
        />
      )}
    </main>
  );
};

export default AdminDash;
