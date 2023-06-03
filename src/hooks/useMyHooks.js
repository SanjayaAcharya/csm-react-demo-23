import axios from "axios";
import { useEffect, useState } from "react";


const useMyHooks = (url) => {
    
    const [resData, setResData] = useState([]);

    useEffect(()=>{
        if(url && url != ""){
            axios({url})
            .then((json) => {
                console.log("json:::",json.data);
                const data = json.data.products;
                setResData(data)
            }
            );
        }
    },[url])
    
    return [resData]; 
}

export default useMyHooks;