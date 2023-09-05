import ILogin from "@/interfaces/iLogin";
const API = "https://us-central1-drinkapi-9006c.cloudfunctions.net/drinkAPI";

export const getAll = async ()  =>{
   let response = await fetch(`${API}/drinks`);
    if(response.status != 200){
        throw new Error("Unable to Find List");
    }
    return response.json();
}

export var jwtoken:string = "";
export const setToken =(token:string)=>{jwtoken = token}

export const postLogin = async (authData:ILogin) => {
    let response = await fetch(`${API}/admin/login`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:authData.username,
            password:authData.password
        })
    })
    return response.json();
}