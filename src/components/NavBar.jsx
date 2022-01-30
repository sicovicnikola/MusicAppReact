import React from 'react';
import {MdStarPurple500} from 'react-icons/md'

function NavBar() {


  return <div className="navBar">
      <a className='active'>All songs</a>
      <div className='cart-items'>
          <a className='active' href=""> <MdStarPurple500/> Favorite</a>
          {/* <p className='cart-num' >0</p> */}
      </div>
      


  </div>;
}

export default NavBar;
