import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import "../css/Home.css"
import PrimarySearchAppBar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeReviewCard from '../components/card'
import PaginationRounded from '../components/pagination'
import CircularIndeterminate from '../components/Loading'


export default function Home() {
     const [data, setData] = useState({});
     const [searchedText, setSearchedText] = useState("");
     const [page, setPage] = useState(0)
     const [Loading, setLoading] = useState(false);

   //  nitesh apikey b08a9b7f97844bab9038da7928473002
   // vikash apikey  f4a506a667424c129c936e2ff53efb61  
  //  umlesh apikey  35ed73d2460c412cb055c8c27e8098ea
      const searchTextFun = (value)=>{
           setSearchedText(value)
           getDataFromApi();
      } 
      const pageFun = (num)=>{
          setPage(num)
          getDataFromApi();
      }

       //console.log("kkkkk",searchedText, page)

     function getDataFromApi(){ 
            setLoading(true);      
         return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=35ed73d2460c412cb055c8c27e8098ea&titleMatch=${searchedText}&number=20&offset=${page >0 ? (page-1)*10 : page*20}`)
         .then((res)=>{
           // console.log("ress", res.data);
             setData(res?.data);
              setLoading(false);
         }).catch((err)=>{
           console.log("err", err);
         })
     }


      useEffect(()=>{
               getDataFromApi();
      },[]);

 
       console.log("datat",data)

  return (
    <div>
      <PrimarySearchAppBar  searchtext = {searchTextFun}   />
          {
             Loading ?  <div style={{ display : "flex", flexDirection : "row", justifyContent : "center", marginTop : "20px"}} >
             <CircularIndeterminate/>
             </div> : ""
          }
          
        

       <div className='cart-container' >

        {
            data?.results?.length > 0 && data?.results?.map((e, i)=>{
                 return <div key={i} className='cart-box' >          
                 <RecipeReviewCard  singleItem={e} />
                </div>   
            })
        }       
        
       </div>
      
      <div className='pagination' >
       <PaginationRounded  totalItem = {data?.totalResults}  pagefun ={pageFun}  />
      </div>
      
       <Footer/>

    </div>
  )
}

