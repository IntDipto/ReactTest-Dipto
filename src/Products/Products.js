import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './../App.css'

function Products() {
    let dbProducts = useLoaderData()
    const [products, Setproducts] = useState(dbProducts);
    const [allProduct, setAllProduct] = useState(dbProducts)
    const [activebtn, setActiveBtn] = useState('all');
    // console.log(products);
    const filterItems = (e) =>{
       
        if(e === "all"){
            Setproducts(allProduct)
            setActiveBtn(e);
            return
        }
        setActiveBtn(e);
        Setproducts(allProduct)
        const filtedProducts  =  allProduct?.filter(product => product.categoty === e)
        Setproducts(filtedProducts);
        // products = filtedProducts
        // console.log(filtedProducts);
    }
    // console.log(activebtn);
    // btn-active btn

  return (
    <div className='products container'>
        <h3>Recommend only for you</h3>
        <div className="btn-container">
            <button onClick={()=>filterItems("all")} className={activebtn === "all" ? 'btn-active' : 'btn'}>best Seller</button>
            <button onClick={()=>filterItems("man")} className={activebtn === "man" ? 'btn-active' : 'btn'}>man</button>
            <button onClick={()=>filterItems("woman")} className={activebtn === "woman" ? 'btn-active' : 'btn'}>Woman</button>
            <button onClick={()=>filterItems("onsell")} className={activebtn === "onsell" ? 'btn-active' : 'btn'}>on sell</button>
            <button onClick={()=>filterItems("new")} className={activebtn === "new" ? 'btn-active' : 'btn'}>new</button>
        </div>

        <div className="product-container">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>

        
    </div>
  )
}

function Product({product}){
    return (
        <div className="product">
            <div className='product-img'>
                <Link to={`/product-details/${product.id}`}>
                    <img src={product.imgMain} alt="" srcSet="" />
                </Link>
            </div>

            <div>
               <ul className="hover-btns">
                    <li style={{display:"flex" , alignItems:"center", gap:"10px"}}>
                        <button className='extra-btns'>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.34984 10.8707L12.0377 6.40847C13.1894 5.30668 13.3572 3.50526 12.2692 2.35389C11.9963 2.06374 11.6642 1.82959 11.293 1.66576C10.9219 1.50192 10.5195 1.41184 10.1106 1.40101C9.70162 1.39018 9.29464 1.45884 8.9145 1.60278C8.53436 1.74673 8.18904 1.96293 7.89965 2.2382L7.01995 3.08107L6.2618 2.35389C5.1043 1.25761 3.2118 1.09785 2.00222 2.13353C1.6974 2.39327 1.45141 2.70944 1.27929 3.06272C1.10718 3.41601 1.01254 3.79899 1.00116 4.18826C0.989789 4.57754 1.06192 4.96493 1.21314 5.32678C1.36436 5.68862 1.5915 6.01732 1.88068 6.29278L6.69007 10.8707C6.77785 10.9535 6.8964 10.9999 7.01995 10.9999C7.1435 10.9999 7.26206 10.9535 7.34984 10.8707V10.8707Z" stroke="#0E0E10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                        </button>
                        <span className='tooltip'>Add to Favorite</span>
                    </li>
                    <li style={{display:"flex" , alignItems:"center", gap:"10px"}}>
                        <button className='extra-btns'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 4.5H2.5C2.22386 4.5 2 4.72386 2 5V13C2 13.2761 2.22386 13.5 2.5 13.5H13.5C13.7761 13.5 14 13.2761 14 13V5C14 4.72386 13.7761 4.5 13.5 4.5Z" stroke="#0E0E10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70107 2.26339 7.33696 2 8 2C8.66304 2 9.29893 2.26339 9.76777 2.73223C10.2366 3.20107 10.5 3.83696 10.5 4.5" stroke="#0E0E10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <span className='tooltip'>Add to Bag</span>
                    </li>
                    <li style={{display:"flex", alignItems:"center", gap:"10px"}}>
                        <button className='extra-btns'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7.5H13.6938C13.786 7.50021 13.8765 7.47455 13.9549 7.42594C14.0334 7.37734 14.0966 7.30772 14.1375 7.225L15.2875 4.925C15.3445 4.80981 15.3555 4.67727 15.3184 4.55424C15.2812 4.43122 15.1987 4.32692 15.0875 4.2625L12 2.5" stroke="#0E0E10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.00013 7.5H2.30638C2.21411 7.50021 2.12362 7.47455 2.04519 7.42594C1.96676 7.37734 1.90351 7.30772 1.86263 7.225L0.712632 4.925C0.655657 4.80981 0.64462 4.67727 0.68176 4.55424C0.718899 4.43122 0.801436 4.32692 0.912632 4.2625L4.00013 2.5" stroke="#0E0E10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 2.5C10 3.03043 9.78929 3.53914 9.41421 3.91421C9.03914 4.28929 8.53043 4.5 8 4.5C7.46957 4.5 6.96086 4.28929 6.58579 3.91421C6.21071 3.53914 6 3.03043 6 2.5H4V13C4 13.1326 4.05268 13.2598 4.14645 13.3536C4.24021 13.4473 4.36739 13.5 4.5 13.5H11.5C11.6326 13.5 11.7598 13.4473 11.8536 13.3536C11.9473 13.2598 12 13.1326 12 13V2.5H10Z" stroke="#0E0E10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <span className='tooltip'>Quick view</span>
                    </li>
               </ul>
            </div>
            <p className='product-category'>{product.categoty}</p>
            <p className='product-name'>{product.name}</p>
            <div className=''>
                {
                    (product.discount === '') ?
                    <p className='product-price'>
                        <span>${product.price}</span> 
                    </p>
                    : 
                    <p className="product-price">
                        <span style={{textDecoration: "line-through"}}>${product.price}</span>
                        <span className='discounted-price'>${product.price - ( product.price * product.discount)/100}</span>
                    </p>
                    
                }
            </div>
            <div className="product-color">
                {product?.color?.map((bgColor, i) => (
                    <div key={i} style={{ backgroundColor: bgColor }} className="c-color"></div>
                ))}
            </div>

            

            <div className="status">
                {
                    (product.productStatus !== "") ? 
                    <div style={{backgroundColor: "#1A3C40",borderTopRightRadius:"5px"}} className='prod-status'>{product.productStatus}</div>
                    :
                    ''
                }
                {
                    (product.discount !== "") ? 
                    <div style={{backgroundColor: "black", color: "white"}} className='prod-status'>{product.discount}%</div>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default Products