import "./drinkInfo.css";
import Drink from "../interfaces/iDrink";
import Card from "../components/card";
import { ArrowBigLeft } from "lucide-react";

const DrinkInfo = ({ drink, onClose }: { drink: Drink; onClose: any }) => {
  return (
    <div className="detail-modal" onClick={onClose}>
      <Card>
        <div className="top-card" onClick={(e) => e.stopPropagation()}>
          <ArrowBigLeft size={32} className="bttn" onClick={onClose} />
          <h2 className="title">{drink.name}</h2>
          <div className="spacer"></div>
        </div>
        <div className="modal-content"  onClick={(e) => e.stopPropagation()}>
          <ul className="list">
            {drink.ingredientList.map((ingredient, index) => (
              <li className="item" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
          <br></br>
          <p>{drink.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default DrinkInfo;
