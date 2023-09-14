import ILogin from "@/interfaces/iLogin";
const API = "https://us-central1-drinkapi-9006c.cloudfunctions.net/drinkAPI";

export const getAll = async () => {
  let drinkList = sessionStorage.getItem('drinkList');
  let drinkTime = sessionStorage.getItem('drinkTime');
  if(drinkList && drinkTime){
    if(Date.now()-parseInt(drinkTime) < (60 * 1000)){
      console.log('returning session drinks');
      return JSON.parse(drinkList);
    }
  }
  let response = await fetch(`${API}/drinks`);
  if (response.status != 200) {
    console.log("errors");
    throw new Error("Unable to Find List");
  }
  let list = await response.json();
  sessionStorage.setItem('drinkList',JSON.stringify(list));
  sessionStorage.setItem('drinkTime',Date.now().toString());
  console.log('returning fetched drinks');
  return list;
};
export const postLogin = async (authData: ILogin) => {
  let response = await fetch(`${API}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: authData.username,
      password: authData.password,
    }),
  });
  sessionStorage.setItem('jwt',Date.now().toString());
  return response.json();
};

export const verifyToken = async (token: string) => {
  let previous_login = sessionStorage.getItem('jwt');
  if(previous_login){
    let prevTime = parseInt(previous_login);
    if(Date.now() - prevTime < (3500*1000) ){
      return new Response();
    }
  }
  let response = await fetch(`${API}/admin/verify-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return response;
};

export const deleteDrink = async (drinkName: string, token: string) => {
  let response = await fetch(`${API}/admin/${drinkName}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return response;
};

export const addNewDrink = async (form: FormData, token: string) => {
  let response = await fetch(`${API}/admin/add`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: form,
  });
  return response;
};

export const updateDrink = async (
  form: FormData,
  drinkName: string,
  token: string
) => {
  let response = await fetch(`${API}/admin/${drinkName}`, {
    method: "PUT",
    headers: {
      Authorization: token,
    },
    body: form,
  });
  return response;
};
