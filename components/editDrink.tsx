import "./drinkInfo.css";
import "./editDrink.css";
import Drink from "../interfaces/drink";
import Card from "./card";
import { X, UploadCloud,PlusSquare,MinusCircle } from "lucide-react";
import { addNewDrink,updateDrink } from "../controllers/request";

import { useEffect, useState } from "react";
import { error } from "console";

interface EditDrinkProps {
  drink?: Drink;
  onClose?: () => void;
  onSave?: () => void;
}

const EditDrink: React.FC<EditDrinkProps> = ({ drink, onClose, onSave }) => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState(drink ? drink.name : "");
  const [price, setPrice] = useState(drink ? drink.price : 0.00);
  const [list, setList] = useState(drink ? drink.ingredientList : []);
  const [newItem, setItem] = useState("");
  const [description, setDescription] = useState(
    drink ? drink.description : ""
  );

  useEffect(() => {
    if (drink) {
      setName(drink.name);
      setPrice(drink.price);
      setList(drink.ingredientList);
      setDescription(drink.description);
    }
  }, [drink]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddIngredient = () => {
    if (newItem.trim() !== '') {
      setList([...list, newItem]);
      setItem('');
    }
  };

  const handleRemoveIngredient = (index:number) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };
  const handleSubmit = async(newDrink:boolean,cb:any)  =>{
        console.log('newDrink?',newDrink);
        const form = new FormData();
        if(image)
            form.append('image',image,image?.name);
        form.append('name',name);
        form.append('price',price.toString());
        form.append('ingredientList',list.join(','));
        form.append('description',description);
        const token = localStorage.getItem('jwtToken');
        if(!token) return;
        try{
            let response;
            if(newDrink)
              response = await addNewDrink(form,token);
            else 
              response = await updateDrink(form,name,token);
            if(response.status == 201){
                cb();
            }else{
                let data  = await response.json();
                throw new Error(data.errors)
            }
        }catch(err){
            console.log(err);
        }
  }


  return (
    <div className="detail-modal">
      <Card>
        <X className="bttn" onClick={onClose} />
        <h2> {drink ? `Editing ${name}` : "Add Drink"}</h2>
        <div className="drinkForm">
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          {!drink &&(
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          )}<br></br>
          <label htmlFor="price">$</label>
          <input
            className="short-input"
            id='price'
            type='number'
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice( parseFloat(e.target.value) )}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           />
          <div> 
             <input
             className="mid-input"
              type="text"
              placeholder="Enter Ingredient"
              value={newItem}
              onChange={(e) => setItem(e.target.value)}
            />
            <PlusSquare className="bttn" onClick={handleAddIngredient}/>
          </div>
          <ul className="list">
            {list.map((ingredient, index) => (
              <li className='item' key={index}>
                
                <MinusCircle className="bttn" size={15} onClick={() => handleRemoveIngredient(index)}/>
                {ingredient}

              </li>
            ))}
          </ul>
          </div>
        <UploadCloud className="save bttn" onClick={
          ()=>{
            const forNew = drink ? false : true;
            handleSubmit(forNew,onSave);
          }
        } />
      </Card>
    </div>
  );
};

export default EditDrink;
