import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
import banner2 from "../../../public/image/Multi-banner-2.avif";
 

const Home = ({addtocart}) => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    const [newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturdProduct] =  useState([])
    const [topProduct, setTopProduct] =  useState([])

    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curElm) => curElm.type === x);
        setTrendingProduct(filterproduct);
    };

    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct);
    };

    useEffect(() => {
        productcategory();
    }, []);

    const productcategory = () => {
        const newcategory = Homeproduct.filter((x) => x.type === 'new');
        setNewProduct(newcategory);

    const featuredcategory = Homeproduct.filter((x) => x.type === 'featured');
    setFeaturdProduct(featuredcategory);

    const topcategory = Homeproduct.filter((x) => x.type === 'top');
    setTopProduct(topcategory);
    };

    return (
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
                                <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                            </div>
                            <div className="cate">
                                <h3 onClick={() => filtercate('new')}>New</h3>
                                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                <h3 onClick={() => filtercate('top')}>Top Selling</h3>
                            </div>
                        </div>
                        <div className="products">
                            <div className="container">
                                {trendingProduct.map((curElm) => (
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
                                                <button className='btn' onClick={() => addtocart (curElm)}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                            <button>Show More</button>
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
                                        <h3>Kinjal Vadher</h3>
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
                                    <p>join our malling list</p>
                                    <input type="email" placeholder='Email' autoCapitalize='off' />
                                    <button>subscribe</button>
                                    <div className="icon_box">
                                        <div className="icon">
                                            <BiLogoFacebook />
                                        </div>
                                        <div className="icon">
                                            <BiLogoTwitter />
                                        </div>
                                        <div className="icon">
                                            <BiLogoInstagram />
                                        </div>
                                        <div className="icon">
                                            <BiLogoYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banners">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <img src="image/Multi-Banner-1.avif" alt="banner" />
                        </div>
                        <div className="box">
                            <img src={banner2} alt="banner" />
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="top">
                            <img src="image/Multi-Banner-3.webp" alt="banner" />
                            <img src="image/Multi-banner-4.avif" alt="banner" />
                        </div>
                        <div className="bottom">
                            <img src="image/Multi-Banner-5.webp" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h2>New Product</h2>
                        </div>
                        {newProduct.map((curElm) => (
                            <React.Fragment key={curElm.id}>
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.image} alt={curElm.Name} />
                                    </div>
                                    <div className="detail">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>Feature Product</h2>
                        </div>
                        {featuredProduct.map((curElm) => (
                            <React.Fragment key={curElm.id}>
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.image} alt={curElm.Name} />
                                    </div>
                                    <div className="detail">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>Top Product</h2>
                        </div>
                        {topProduct.map((curElm) => (
                            <React.Fragment key={curElm.id}>
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.image} alt={curElm.Name} />
                                    </div>
                                    <div className="detail">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
