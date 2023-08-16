import React from 'react'
import "../css/Home.css"
import PrimarySearchAppBar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeReviewCard from '../components/card'
import PaginationRounded from '../components/pagination'
import CircularIndeterminate from '../components/Loading'


export default function Home() {
  return (
    <div>
      <PrimarySearchAppBar/>

        {/* <CircularIndeterminate/> */}
       <div className='cart-container' >
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
        <div className='cart-box' >
         <RecipeReviewCard/>
        </div>
       </div>
      
      <div className='pagination' >
       <PaginationRounded/>
      </div>
      
       <Footer/>

    </div>
  )
}

