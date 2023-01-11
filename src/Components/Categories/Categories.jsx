import React from "react";
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="cat-container">
    <div className='categories'>
        <div className="col">
        <div className="row"><img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/blog">
             Blog
            </Link>
          </button>
          </div>
        <div className="row">
        <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/shops" className="link">
             Shops
            </Link>
          </button>
        </div>
        </div>
        <div className="col">
        <div className="row">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/mystory" className="link">
              My Story
            </Link>
          </button>
        </div>
        </div>
        </div>
        <div className="col">
        <div className="row">
        <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/courses" className="link">
                  Courses
                </Link>
              </button>
        </div>
        </div>
        <div className="col">
        <div className="row">
        {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products" className="link">
               Products
                </Link>
              </button>
          </div> 
        </div>
        </div>
        
        </div>
  )
}

export default Categories;