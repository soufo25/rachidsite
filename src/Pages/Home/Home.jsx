import React from 'react';
import Categories from '../../Components/Categories/Categories';
import List from '../../Components/List/List';
import "./Home.scss";


const Home = () => {



  return (

    <>
    <div className='wrapper-body'> 
        <div className="sticker-item" >
          <img src="/images/many_shirts.jpg"  alt= ""/>
          <p>Shirts</p>
        </div>
        <div className="sticker-item">
          <img src="/images/pexels-lukas-292999.jpg" alt= ""/>
          <p>Shoes</p>
        </div>
        <div className="sticker-item">
          <img src="/images/pexels-ray-piedra-1502216.jpg"  alt= ""/>
          <p>Bags</p>
        </div>
        <div className="sticker-item">
          <img src="/images/pexels-pixabay-52518.jpg"  alt= ""/>
          <p>Jeans</p>
        </div>
        <div className="sticker-item">
          <img src="/images/pexels-ainnekha-13465219.jpg" alt= ""/>
          <p>Hats</p>
        </div>
        <div className="sticker-item">
          <img src="/images/pexels-dejan-krstevski-1578997.jpg" alt= ""/>
          <p>Jeans-Suit</p>
        </div>
    </div>
    <br/>
    <List />
    <br/>
    <Categories />
    </>
   
  )
}

export default Home
