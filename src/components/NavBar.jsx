import React from 'react';
import {MdStarPurple500} from 'react-icons/md';
import {Link} from 'react-router-dom';

function NavBar() {


  return <div className="navBar">
      <Link  to='/' className='active'>All songs</Link>
      <div className='cart-items'>
          <Link to='/favorites' className='active' > <MdStarPurple500/> Favorites</Link>
          {/* <p className='cart-num' >0</p> */}
      </div>
      


  </div>;
}

export default NavBar;
