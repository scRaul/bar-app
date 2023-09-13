import "./adminDash.css";

import React, { useEffect, useState } from "react";
import Drink from "../interfaces/iDrink";
import { getAll } from "../controllers/request";
import EditDrink from "./editDrink";
import AdminCard from "./adminCard";
import { deleteDrink } from "../controllers/request";
import { Martini, PlusCircle, LogOut } from "lucide-react";
import ConfirmationModal from "./confirmModal";

interface AdminDashProps {
  onLogOut: () => void;
}

const AdminDash: React.FC<AdminDashProps> = ({ onLogOut }) => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [newDrink, setNewDrink] = useState(false);
  const [loggingOut,setLoggingOut] = useState(false);
  const [deleting,setDeleting] = useState(false);
  
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
  const openLogOutConfirmation = () =>{
    setLoggingOut(true);
  }
  const closeLogOutConfirmation = () =>{
    setLoggingOut(false);
  }
  const openDeleteConfirmation = (drink:Drink) =>{
    setDeleting(true);
    setSelectedDrink(drink);
  }
  const closeDeletingConfirmation = ()=>{
    setDeleting(false);
    setSelectedDrink(null);
  }
  const handleDeleteDrink = async (drinkName: string) => {
    closeDeletingConfirmation();
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
      alert("succesfully deleted a drink");
      await getDrinkList();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateDrink = async () => {
    alert("updated drink");
    await getDrinkList();
    closeDrinkInfo();
  };
  const handleAddNewDrink = async () => {
    alert("added a new Drink");
    await getDrinkList();
    closeDrinkInfo();
  };
  return (
    <div className="admin-dash">
      <div className="admin-cntrl">
        <div className="add-bttn bttn" onClick={openNewDrink}>
          <PlusCircle className="plus-icon" size={25} />
          <Martini size={50} />
        </div>
        <LogOut size={50} className="bttn" onClick={openLogOutConfirmation} />
      </div>

      <div className={`drinks ${
          (selectedDrink || newDrink ||loggingOut) ? "blur" : ""}`
        }>
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
            onDelete={()=>openDeleteConfirmation(drink)}
          />
        ))}
      </div>

      {(selectedDrink && !deleting) && (
        <EditDrink
          drink={selectedDrink}
          onClose={closeDrinkInfo}
          onSave={handleUpdateDrink}
        />
      )}
      {newDrink && (
        <EditDrink onClose={closeDrinkInfo} onSave={handleAddNewDrink} />
      )}
      {loggingOut && (
        <ConfirmationModal
            message="You are about to sign out"
            onConfirm={onLogOut}
            onClose={closeLogOutConfirmation}
        />
      )}
      {(deleting && selectedDrink) && (
        <ConfirmationModal
            message="Confrim to delete"
            onConfirm={()=>handleDeleteDrink(selectedDrink.name)}
            onClose={closeDeletingConfirmation}
        />
      )}

    </div>
  );
};

export default AdminDash;
