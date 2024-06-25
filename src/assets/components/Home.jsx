import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'

const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)

    // filter of trending products
    const filtercate = (x) => {
       
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }

    // All trending products
    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct)
    }

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <h3>sliver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your order</p>
                        <Link to='/' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProduct ()}>Trending Product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={() => filtercate ('new')}>New</h3>
                                    <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate ('top')}>Top Selling</h3>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((curElm) => {
                                            return (
                                                <React.Fragment key={curElm.id}>
                                                    <div className="box">
                                                        <div className="img_box">
                                                            <img src={curElm.image} alt={curElm.Name} />
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                    <AiFillEye />
                                                                </div>
                                                                <div className="icon_box">
                                                                    <AiFillHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{curElm.Name}</h3>
                                                            <p>${curElm.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="right_container">
                                <div className="testmonial">
                                    <div className="head">
                                        <h3>our testmonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src='image/T1.avif' alt="testmonial" />
                                        </div>
                                        <div className="info">
                                            <h3>smit viradiya</h3>
                                            <h4>web designer</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ducimus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter">
                                    <div className="head">
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className="form">
                                        <p>join our malling ist</p>
                                        <input type="email" placeholder='Email' autoCapitalize='off' />
                                        <button>subscribe</button>
                                        <div className="icon_box">
                                            <div className="icon">
                                                <BiLogoFacebook />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
