import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const  {name,email,phone}=user
    return (
        <div>
            <h1 className="text-2xl"> User Details </h1>
            <h2 >Name : <span className="text-2xl"> {name}</span></h2>
            <p className="text-amber-600">{email}</p>
            <p className="font-bold">{phone}</p>
        </div>
    );
};

export default UserDetails;