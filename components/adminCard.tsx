import Card from './card'; 
import './adminCard.css'; 
import Drink from '../interfaces/drink'
import { Pencil,Trash2 } from 'lucide-react';


interface AdminCardProps extends Drink {
    onEdit?: () => void; 
    onDelete?:() => void;
  }
  
  const AdminCard: React.FC<AdminCardProps> = ({
    name,
    price,
    description,
    ingredientList,
    imagePath,
    downloadURL,
    onEdit,
    onDelete
}) => {
  return (
    <Card className='admin-card'>
        <div className='top-info' >
            <div className="admin-name">{name}</div>
            <div className="admin-price">${price}</div>
            <Pencil className="edit bttn" onClick={onEdit}/>
            <Trash2 className='delete bttn' onClick={onDelete}/>
        </div>
        <div className='mid-info'>
            <img src={downloadURL} alt={name} className="admin-image" />
            <ul className='admin-ingredientList'>
            {ingredientList.map( (item,index) =>(
                <li className='admin-item' key={index}>{item}</li>
            ))}
            </ul>
        </div>
        <div className="admin-description">{description}</div>
    </Card>
  );
};

export default AdminCard;
