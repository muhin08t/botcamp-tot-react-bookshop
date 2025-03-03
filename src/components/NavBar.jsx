// NavBar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div> 
 <div className="navbar bg-[#fefdff]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn rounded-md btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>

<div className="flex mr-10">
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <img src="/logo3.png" alt="site Logo" className="w-10 h-6 mr-2" />
          Book house
        </a>
      </div>

  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
        <li className='text-lg'> <Link to="/">Home</Link></li>
        <li className='text-lg'><Link to="/about">About</Link></li>
        <li className='text-lg'><Link to="/blog">Blog</Link></li>
        <li className='text-lg'><Link to="/faq">FAQ</Link></li>
    </ul>
  </div>
  <div className="navbar-end invisible">
    <button className='w-24 h-10 bg-[#7676ea] rounded-md  text-white'>Buy book</button>
    <button className='w-24 h-10 bg-[#7676ea]  rounded-md ml-5 mr-12 text-white'>Sign In</button>
  </div>
  
</div>
<hr className="border-t-1 border-gray-300 mt-4" />

</div>

    );
}

export default Navbar;
