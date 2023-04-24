import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) { 
            auth.signOut();
    
        } 
    }

  return (
    <div className = 'header' >
     <Link to='/'>
        <img
          className='header__logo' 
          src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817'
         />   
    </Link>    
         
         <div className = 'header__search'>
            <input className = 'header__searchInput' type='text' />
           <SearchIcon className='header__searchIcon'/>
        </div>

         <div className = 'header__nav'> 
            <Link to={!user && '/login'}>
            <div onClick={() => handleAuth()} className = 'header__options'> 
                <span className = 'header__optionLine1' > 
                Hello {user?.email}
                
                </span> 
                <span className = 'header__optionLine2' > 
                { user ? 'Sign Out' : 'Sign In' }

                
                </span> 
            </div>
            </Link>

            <div className = 'header__options'> 
            <span className = 'header__optionLine1' > 
                Returns
                </span> 
                <span className = 'header__optionLine2' > 
                Orders
                </span> 
            </div>

            <div className = 'header__options'> 
            <span className = 'header__optionLine1' > 
                Your
                </span> 
                <span className = 'header__optionLine2' > 
                Prime
                </span> 
            </div>

            <Link to='/checkout'>
            <div className = 'header__optionBasket'> 
                <ShoppingBasketIcon />
                <span className='header__optionLine2 header__basketCount'>
                    {basket?.length}
                </span>
             </div>
            </Link>

         </div>
    
      </div>
  );
}

export default Header