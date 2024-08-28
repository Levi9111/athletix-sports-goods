import { Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ResponsiveNav from './ResponsiveNav';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <nav className='flex items-center justify-between bg-main px-4 py-5 text-xl text-white relative'>
      <div className='flex items-center justify-center gap-1'>
        <ResponsiveNav />
        <h1 className='font-bold md:text-4xl text-2xl'>
          <Link to='/'>athletix</Link>
        </h1>
      </div>
      <ul className='md:flex hidden space-x-6 text-xl font-semibold'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/all-products'>All Products</NavLink>
        </li>
        <li>
          <NavLink to='/manage-products'>Manage Products</NavLink>
        </li>
        <li>
          <NavLink to='/about-us'>About Us</NavLink>
        </li>
      </ul>

      <ul className='flex items-center md:space-x-7 space-x-3 text-xl font-semibold'>
        <li>
          <NavLink to='login' className='flex items-center justify-center'>
            <p className='md:block hidden'>Login</p>
            <User />
          </NavLink>
        </li>
        <li>
          <NavLink to='cart' className='flex space-x-2 items-center'>
            <ShoppingCart />
            <p className='md:block hidden'>Cart</p>
          </NavLink>
        </li>
      </ul>
      {navActive && (
        <div className='bg-main absolute top-16 left-0 right-0 '>
          <ul className='pl-4 space-y-2 text-[16px] font-semibold'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/all-products'>All Products</NavLink>
            </li>
            <li>
              <NavLink to='/manage-products'>Manage Products</NavLink>
            </li>
            <li>
              <NavLink to='/about-us'>About Us</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
