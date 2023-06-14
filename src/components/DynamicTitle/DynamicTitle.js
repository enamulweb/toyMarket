import { useEffect } from "react";
const DynamicTitle=(title)=>{
    title? title= '|'+title : ''
    useEffect(()=>{
        document.title = `ToyMarket${title}`;   
},[])
}
 

export default DynamicTitle;