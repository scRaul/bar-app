import ILogin from "@/interfaces/iLogin";
const API = "https://us-central1-drinkapi-9006c.cloudfunctions.net/drinkAPI";

export const getAll = async ()  =>{
   let response = await fetch(`${API}/drinks`);
    if(response.status != 200){
        console.log('errors');
        throw new Error("Unable to Find List");
    }
    console.log('returning')
    return response.json();
}
export const postLogin = async (authData:ILogin) => {
    let response = await fetch(`${API}/admin/login`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username":authData.username,
            "password":authData.password
        })
    })
    return response.json();
}

export const verifyToken = async(token:string) =>{
    let response = await fetch(`${API}/admin/verify-token`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    return response;
}