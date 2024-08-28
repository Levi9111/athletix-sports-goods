import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function ResponsiveNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className='block md:hidden' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuSeparator />
        <NavLink to='/'>
          <DropdownMenuCheckboxItem>Home</DropdownMenuCheckboxItem>
        </NavLink>
        <DropdownMenuSeparator />

        <NavLink to='/all-products'>
          <DropdownMenuCheckboxItem>All Products</DropdownMenuCheckboxItem>
        </NavLink>
        <DropdownMenuSeparator />

        <NavLink to='/manage-products'>
          <DropdownMenuCheckboxItem>Manage Products</DropdownMenuCheckboxItem>
        </NavLink>
        <DropdownMenuSeparator />

        <NavLink to='/about-us'>
          <DropdownMenuCheckboxItem>About Us</DropdownMenuCheckboxItem>
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
