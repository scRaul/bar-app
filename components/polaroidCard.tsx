import Card from './card'; // Import your Card component
import './polaroidCard.css'; // You can adjust the path to your CSS file for styling

interface PolaroidCardProps {
    imageSrc: string;
    name: string;
    price: number;
    onClick?: () => void; // Define the onClick prop
  }
  
  const PolaroidCard: React.FC<PolaroidCardProps> = ({ imageSrc, name, price, onClick}) => {
  return (
    <div className='poloroid' onClick={onClick}>
    <Card>
        <img src={imageSrc} alt={name} className="polaroid-image" />
        <div className="polaroid-details">
          <div className="polaroid-name">{name}</div>
          <div className="polaroid-price">${price}</div>
        </div>
    </Card>
    </div>
  );
};

export default PolaroidCard;
