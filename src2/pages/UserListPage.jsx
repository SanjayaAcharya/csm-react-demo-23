import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';


const url = "http://localhost:3000/users";

const UserListPage = async() => {   

    // const [data, setdata] = useState(['']);
    const response = await  axios.get(url,{});  

    console.log(response.data)
 
    // useEffect(()=>{
    //     setdata(response.data);
    // },[data])
    // return  response;
    
    
    // getUserlist()
    return (
        <>
            user list
        </>
    )
} 
export default UserListPage;