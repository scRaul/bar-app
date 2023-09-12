
import './drinkInfo.css'; 
import Drink from '../interfaces/drink'
import Card from '../components/card'
import { ArrowBigLeft } from 'lucide-react';

const DrinkInfo = ({ drink, onClose } : {drink : Drink, onClose : any }) => {
  return (
    <div className="detail-modal">
        <Card>
          <div className='top-card'>
            <ArrowBigLeft size={32} className='back' onClick={onClose}/>
            <h2 className='title'>{drink.name}</h2>
            <div className='spacer'></div>
        </div>
      <div className="modal-content">
       
      <ul className="list">
        {drink.ingredientList.map((ingredient, index) => (
              <li className='item' key={index}>
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
