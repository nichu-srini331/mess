import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import rmk from './rmk.png';
import ShopIcon from '@mui/icons-material/Shop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CategoryIcon from '@mui/icons-material/Category';
import FestivalIcon from '@mui/icons-material/Festival';
import LogoutIcon from '@mui/icons-material/Logout';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Slidebar() {
  return (
    <div className='container-fluid'>
  <Sidebar className='sidebar'>
  <Menu>
    <div className='row'> <MenuItem> <img src={rmk} className='logo'/> </MenuItem></div>
    <div className='cont'>
    <div className='row'> <MenuItem className='sub-nav sub-n'> <ShopIcon/> <Link to='/purs'>Purchase</Link>  </MenuItem></div>
 <div className='row'><MenuItem className='sub-n'><LocalShippingIcon/><Link to='/dis'> Dispatch </Link> </MenuItem></div>
 <div className='row'><MenuItem className='sub-n'><StoreIcon/> <Link to='/stock'>Available Stock</Link> </MenuItem></div>
 <div className='row'> <MenuItem className='sub-n'><AssessmentIcon/><Link to='/rep'> Reports</Link> </MenuItem></div>
 <div className='row'><MenuItem className='sub-n'><CategoryIcon/><Link to='/'> Categories </Link></MenuItem></div>
 <div className='row'><MenuItem className='sub-n'><FestivalIcon/><Link to='/ven'> Vendors</Link> </MenuItem></div>
 <div className='row'><MenuItem className='sub-n'><LogoutIcon/> Logout </MenuItem></div>
    </div>
  </Menu>
</Sidebar>
    </div>
  )
}

export default Slidebar