import React from 'react'
import './Nav.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Logo from '../../../public/image/logo.webp';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocalShipping } from 'react-icons/md'
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { CiLogout, CiUser } from 'react-icons/ci';

const Nav = () => {

     const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  

  return (
    <>
       <div className="header">
        <div className="top_header">
            <div className="icon">
                <MdLocalShipping />
            </div>
            <div className="info">
                <p>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className="mid_header">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="search_box">
                <input type="text" value="" placeholder='search' />
                <button><AiOutlineSearch/></button>
            </div>
            {
                isAuthenticated ? 
                // if user is login then  logout Button will show also user profile
                    <div className="user">
                    <div className="icon">
                     <CiLogout/>
                     </div>
                    <div className="btn">
                        <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                    </div>
                    </div>
                :
                //if user is not login then login Button will show
                <div className="user">
                <div className="icon">
                    <FiLogIn/>
                </div>
                <div className="btn">
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
                </div>
            }
        </div>
        <div className="last_header">
            <div className="user_profile">
                {
                    // user Profile

                    isAuthenticated ?
                    <>
                        <div className="icon">
                            <CiUser/>
                        </div>
                        <div className="info">
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="icon">
                            <CiUser/>
                        </div>
                        <div className="info">
                            <p>Please Login</p>
                        </div>
                    </>
                }
            </div>
            <div className="nav">
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/shop' className='link'>Shop</Link></li>
                    <li><Link to='/collection' className='link'>Collection</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/contact' className='link'>Contect</Link></li>
                </ul>
            </div>
            <div className="offer">
                <p>flat 10% over all iphone</p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Nav
