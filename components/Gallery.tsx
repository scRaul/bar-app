import './Gallery.css'
import { useState } from "react";
import DrinkInfo from './drinkInfo';
import Drink from '@/interfaces/iDrink'

interface GalleryProps {
    id?:string;
    className?:string;
    drinkList:Drink[];
    pageSize:number;
    blur:boolean;
    handleEnter?:()=>void;
}



const Gallery:React.FC<GalleryProps> = ({id,className,drinkList,pageSize,blur,handleEnter}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<{ [index: number]: boolean }>({});
    const [selectedDrink,setSelectedDrink] = useState<Drink | null>(null);

    const nextDrinks = drinkList.slice(currentIndex,currentIndex+pageSize);
    
    const handleImageLoad = (index:number) => {
        // Update the loadedImages state to indicate that the image at the given index has loaded
        setLoadedImages((prevLoadedImages) => ({
          ...prevLoadedImages,
          [index]: true,
        }));
      };

      const openDrinkInfo = (drink: Drink) => {
        setSelectedDrink(drink);
      };
      const closeDrinkInfo = () => {
        setSelectedDrink(null);
      };
    return (
        <article id={id} className={`gallery ${className} `} onMouseEnter={handleEnter}>

                <section className = {`window ${(selectedDrink)? 'blur': ''} `}>
                {nextDrinks.map( (drink,index)=>(
                    <div className={`g-img-box  ${loadedImages[index] ? 'loaded' : ''}`} key={index}>
                        <img className={`g-img ${ blur ? 'img-blur' :'img-fade'}`} 
                            src={drink.downloadURL}
                            onLoad={() => handleImageLoad(index)}
                            onClick={()=>openDrinkInfo(drink)}
                        /> 
                    </div>
                ))} 
                  </section>  

                  {selectedDrink && (
        <DrinkInfo drink={selectedDrink} onClose={closeDrinkInfo} />
      )}         
        </article>
    )
}


export default Gallery;