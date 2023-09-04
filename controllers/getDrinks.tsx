
const API = "https://us-central1-drinkapi-9006c.cloudfunctions.net/drinkAPI";

export const getAll = async ()  =>{
   let response = await fetch(`${API}/drinks`);
    if(response.status != 200){
        throw new Error("Unable to Find List");
    }
    return response.json();
}