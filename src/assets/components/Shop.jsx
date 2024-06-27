import React from 'react'
import "./Shop.css"
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'

const Shop = ({shop, Filter, allcatefilter}) => {
  return (
    <>
        <div className="shop">
            <h2># Shop</h2>
            <p>Home .shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h2>all Category</h2>    
                        </div>    
                        <div className="box">
                            <ul>
                                <li onClick={() => allcatefilter ()}># All</li>
                                <li onClick={() => Filter ("tv")}># tv</li>
                                <li onClick={() => Filter ("laptop")}># laptop</li>
                                <li onClick={() => Filter ("watch")}># watch</li>
                                <li onClick={() => Filter ("speaker")}># speaker</li>
                                <li onClick={() => Filter ("electronics")}># electronics</li>
                                <li onClick={() => Filter ("headphone")}># headphone</li>
                                <li onClick={() => Filter ("phone")}># phone</li>
                            </ul>
                        </div>
                    </div>  
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/shop_left.avif" alt="" />
                        </div>
                    </div>                                                                                                                                                                                                                                                           
                </div>
                <div className="right_box">
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/shop_top.webp" alt="" />
                        </div>
                    </div>
                    <div className="product_box">
                        <h2>Shop Product</h2>
                        <div className="product_container">
                            {
                                shop.map((curElm)=>
                                {
                                        return(
                                            <>
                                                <div className="box">
                                                    <div className="img_box">
                                                        <img src={curElm.image} alt="" />
                                                        <div className="icon">
                                                            <li> <AiFillHeart /></li>
                                                            <li> <AiFillEye /></li>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <h3>{curElm.Name}</h3>
                                                        <p>${curElm.price}</p>
                                                        <button>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop
