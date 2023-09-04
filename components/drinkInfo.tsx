
import './drinkInfo.css'; 
import Drink from '../interfaces/drink'
import Card from '../components/card'
import { ArrowBigLeft } from 'lucide-react';

const DrinkInfo = ({ drink, onClose } : {drink : Drink, onClose : any }) => {
  return (
    <div className="detail-modal">
        <Card>
        {/* <button onClick={onClose}>Close</button> */}
        <ArrowBigLeft onClick={onClose}/>
      <div className="modal-content">
        <h2>{drink.name}</h2>
        <p>Ingredients:  </p>
        {drink.ingredientList.map(item =>(
            <p>{item}</p>
        ))}
        <p>Description: {drink.description}</p>
      </div>
      </Card>
    </div>
  );
};

export default DrinkInfo;
