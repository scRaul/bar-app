import { useRouter } from "next/router";

const GetDrinkByName = () =>{
    const router = useRouter();
    console.log(router.query);
    return(
        <div>
            <h1> This is a very specific drink </h1>
        </div>
    );
}


export default GetDrinkByName;