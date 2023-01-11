import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import "./Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <div className='wrapper'>
      <div className="left">
      <SearchRoundedIcon />
      </div>
      <div className="center">
      <Link to= "/mystory" className='link'>
      <h4>MY STORY</h4>
      </Link>
      <Link to= "/blog" className='link'>
      <h4>BLOG</h4>
      </Link>
      <Link to= "/shops" className='link'>
      <h4>SHOPS</h4>
      </Link>
      <Link to= "/courses" className='link'>
      <h4>COURSES</h4>
      </Link>
      </div>
      <div className="right">
        <DarkModeTwoToneIcon />
      </div>
      </div>
      <div className="sub-nav">
          <div className="items">
          <span>printables</span>
          <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="items">
          <span>faith</span>
          <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="items">
          <span>family</span>
          <KeyboardArrowDownOutlinedIcon />
          </div>
          <Link to= "/" className='link' >
           <div className='link'>RACHID-SITE</div>
           </Link>
           <div className="items">
          <span>home</span>
          <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="items">
          <span>design</span>
          <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="items">
          <span>makemoney</span>
          <KeyboardArrowDownOutlinedIcon />
          </div>
      </div>
      <div className="sub-nav-list">
        <ul>
          <li className='nav-li'>
            <span>browse by printables</span>
            <ChevronRightOutlinedIcon />
          </li>
          <li>
            Christian
          </li>
          <li>
            holidays
          </li>
          <li>
            binders
          </li>
          <li>
            calendars
          </li>
          <li>
            coloring
          </li>
          <li>
            hand lettering
          </li>
          <li>
            bookmarks
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;
