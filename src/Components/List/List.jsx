import React from "react";
import "./List.scss";


 const Data = [

   {id: 1,
   img: <img src="/images/pexels-cottonbro-studio-6626882.jpg" alt="" />,
   title: "Hats",},

   {id: 2,
   img: <img src="/images/pexels-hassan-ouajbir-1306248.jpg"  alt="" />,
   title: "Shoes"},

   {id: 3,
   img: <img src="/images/pexels-joshua-roberts-12922525.jpg" alt=""/>,
   title: "T-shirts"},

   {id: 4,
   img: <img src="/images/pexels-kristin-vogt-54203.jpg" alt="" /> ,
   title: "Jackets"},

   {id: 5,
   img:<img src="/images/pexels-adhen-wijaya-kusuma-12820465.jpg" alt="" />,
   title: "Collections"},

  
 ];
  const List = () =>{
    return(
      <div className="background-body" >
      {Data?.map((item)=>
      <div key={item.id} className= "card">
        <div className="image">{item.img}</div>
        <h1>{item.title}</h1>
        </div>)}
        <div className='sticky'>
        <h2>
          Free 2023 Daily Planning
        </h2>
        <p>
          1,000+ pages of calendars, stickers, wall art, 
          planners, goal tracking sheets, and more!
        </p>
        <button>
          Yes, please!
        </button>
      </div>
      </div>
     
  
    )
  }

 export default List;

