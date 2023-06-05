import React, {useState, useEffect} from "react";

const useAuth = (jwt) => {
    const [isAuth, setIstAuth] = useState(true)

    useEffect(() => {
        if(jwt.length>25){
         setIstAuth(true)
     }else{
        setIstAuth(false)
    }
     return isAuth
    },[])
   
}

export default useAuth