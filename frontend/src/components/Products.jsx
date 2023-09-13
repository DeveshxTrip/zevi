import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../components/Products.css'
import { Link } from "react-router-dom";

const Products = ({results}) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <Link to={"SearchBar"}>Go To Home Page</Link>
   <div className='container'>
      <Carousel responsive={responsive}>
        <div className='card'>
            <img className='image' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='card'/>
            <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
            <p className='price'></p>
            <button>ADD TO CART</button>
        </div>
        <div className='card'>
            <img className='image' src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='card'/>
            <h2>Mens Casual Premium Slim Fit T-Shirts </h2>
            <p className='price'></p>
            <button>ADD TO CART</button>
        </div>
        <div className='card'>
            <img className='image' src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt='card'/>
            <h2>Mens Cotton Jacket</h2>
            <p className='price'></p>
            <button>ADD TO CART</button>
        </div>
        <div className='card'>
            <img className='image' src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt='card'/>
            <h2>Mens Casual Slim Fit</h2>
            <p className='price'></p>
            <button>ADD TO CART</button>
        </div>
      </Carousel>
      </div>
      </>
  )}

export default Products
