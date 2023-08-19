import { getLocalData } from "../utilities/LocalStorage";
import { Navigate, useLocation } from "react-router-dom"



const  ReqAuth = ({children}) =>{
    let location = useLocation();
     let isAuth =  getLocalData("userDetails")
      
    if(!isAuth){
        return <Navigate to="/login" state ={{from : location}}/>;
    }
    return children;
};
export default ReqAuth;