import React, { useEffect } from 'react'
import { useState } from 'react'
import { json, useParams } from 'react-router-dom'

import "../css/Home.css"
import PrimarySearchAppBar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeReviewCard from '../components/card'
import PaginationRounded from '../components/pagination'
import CircularIndeterminate from '../components/Loading'
import axios from 'axios'

export default function RecipeDetails() {
  const [Loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [data, setData] = useState({});

    const {id} = useParams();

  const searchTextFun = (value)=>{
    setSearchedText(value)
    } 

      const detailsfun = ()=>{
           setLoading(true)
          return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=35ed73d2460c412cb055c8c27e8098ea&includeNutrition=true`).then((res)=>{
             console.log("resss", res?.data)
              setData(res?.data);
              setLoading(false)
          }).catch((err)=>{
             console.log("err", err);
          })
      }

      useEffect(()=>{
         detailsfun();
      },[])


  return (
    <div>

<div>
    <PrimarySearchAppBar  searchtext = {searchTextFun}  />
         <h1 style={{textAlign : "center", color :"red"}} >Details of Recipe</h1>
        
         {
             Loading ?  <div style={{ display : "flex", flexDirection : "row", justifyContent : "center", marginTop : "20px"}} >
             <CircularIndeterminate/>
             </div> : ""
          }

     <div  style={{width : "80%", marginLeft : "10%", marginRight :"10%"}} >
       
       <div style={{ display : "flex", flexDirection : "row", justifyContent : "center", marginTop : "20px"}} >
        <img style={{width :"100%"}} src={data?.image} alt="boohoo" />
      </div>
          <h3 style={{color :"blue", textAlign :"center"}} >Summary</h3>
        <p > { data?.summary} </p>
      
           <h3 style={{color :"green", textAlign :"center"}} >Instruction</h3>

           <p>{data?.instructions}</p>

           <p style={{textAlign :"center", marginBottom :"20px"}} >  <a href= {data?.spoonacularSourceUrl} > click here for more details </a> </p>
      
     </div>
    
     <Footer/>

  </div>
 
    </div>
  )
}
