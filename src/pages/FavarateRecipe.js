import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../utilities/urls'
import { getLocalData } from '../utilities/LocalStorage'

import "../css/Home.css"
import PrimarySearchAppBar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeReviewCard from '../components/card'
import PaginationRounded from '../components/pagination'
import CircularIndeterminate from '../components/Loading'



function FavarateRecipe() {
      const  [data, setData] = useState([]);
      const [searchedText, setSearchedText] = useState("");
      const [Loading, setLoading] = useState(false);

      const searchTextFun = (value)=>{
        setSearchedText(value)
   } 

     const favFun = ()=>{
          let isAuth = getLocalData("userDetails");
         let payload = {
            user_id :  isAuth?.user?._id
         }
            setLoading(true)
         return axios.get( baseUrl + "favproduct", payload).then((res)=>{
              setData(res?.data?.products);
               setLoading(false)
         }).catch((err)=>{
             console.log("err", err);
         })
     }

     useEffect(()=>{
         if(data.length == 0){
            favFun();
         }
         
     },[]);


  return (
    <div>
    <PrimarySearchAppBar  searchtext = {searchTextFun}  />
         <h1 style={{textAlign : "center", color :"red"}} >Favourite Recipe</h1>
        
         {
             Loading ?  <div style={{ display : "flex", flexDirection : "row", justifyContent : "center", marginTop : "20px"}} >
             <CircularIndeterminate/>
             </div> : ""
          }

     <div className='cart-container' >

      {
          data?.length > 0 && data?.map((e, i)=>{
               return <div key={i} className='cart-box' >          
               <RecipeReviewCard  singleItem={e} />
              </div>   
          })
      }       
      
     </div>
    
     <Footer/>

  </div>
  )
}

export default FavarateRecipe