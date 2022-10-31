import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination,Navigation } from "swiper";

function ProductDetails() {
    const {id }= useParams()

    const [data,setData] = useState()
    const [image,setImage] = useState('')

    useEffect(()=>{
        fetch("http://localhost:3000/products.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const product =  data.find(product => product.id == id)
            setData(product)
            
        })
    },[])

    let screenWidth = window.innerWidth
    const changeImage = (img) =>{
        setImage(img)
    }

    // console.log(data);

  return (
    <div  className='container'>
        <div className="product-details-container">
            <div className="img-slider">
                <div className="slider-container">
                    <Swiper
                        direction={screenWidth <640 ? "horizontal" : "vertical"}
                        slidesPerView={5}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination,Navigation]}
                        className="mySwiper"
                    >
                        {data?.descImg.map((img,i)=> <SwiperSlide key={i} onClick={()=> changeImage(img)}><img src={img} alt="" /></SwiperSlide>)}
                        
                    </Swiper>
                </div>
                <div className="main-img-container">
                    <img src={image? image : data?.imgMain} alt="" srcset="" />
                </div>
                <div className="others-btns">
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
            </div>
            <div className="details">
                <p>{data?.name}</p>
            
                {/* rating  */}
                <div className="rating">
                    {/* start rating part  */}
                    <div style={{display:"flex",gap:"5px"}} className="star">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72217 0.277832L12.7271 6.67754L19.4443 7.70664L14.5813 12.6873L15.7283 19.7222L9.72217 16.4017L3.71224 19.7222L4.85917 12.6873L0 7.70664L6.71721 6.67754L9.72217 0.277832Z" fill="#EEC32A"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72217 0.277832L12.7271 6.67754L19.4443 7.70664L14.5813 12.6873L15.7283 19.7222L9.72217 16.4017L3.71224 19.7222L4.85917 12.6873L0 7.70664L6.71721 6.67754L9.72217 0.277832Z" fill="#EEC32A"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72217 0.277832L12.7271 6.67754L19.4443 7.70664L14.5813 12.6873L15.7283 19.7222L9.72217 16.4017L3.71224 19.7222L4.85917 12.6873L0 7.70664L6.71721 6.67754L9.72217 0.277832Z" fill="#EEC32A"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72217 0.277832L12.7271 6.67754L19.4443 7.70664L14.5813 12.6873L15.7283 19.7222L9.72217 16.4017L3.71224 19.7222L4.85917 12.6873L0 7.70664L6.71721 6.67754L9.72217 0.277832Z" fill="#EEC32A"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72217 0.277832L12.7271 6.67754L19.4443 7.70664L14.5813 12.6873L15.7283 19.7222L9.72217 16.4017L3.71224 19.7222L4.85917 12.6873L0 7.70664L6.71721 6.67754L9.72217 0.277832Z" fill="#EEC32A"/>
                        </svg>
                    </div>

                    {/* rating calculation */}
                    <div className="rating-number">
                        <p style={{color:"black"}}>5.0<span style={{fontSize:"16px" , color: "#15151533"}}> / 5</span></p>
                    </div>

                    <p className='user-rating'>{data?.rating} Ratings</p>
                </div>

                {/* selling  */}
                <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between",marginTop:"32px"}} className="selling">
                    <h5 >${data?.price}</h5>
                    <p>🔥 <span style={{fontWeight:"600"}}>20 sold </span> <span style={{fontWeight : '400'}}>within 1 hour</span></p>
                </div>

                {/* color  */}
                <div className="product-color">
                    {data?.color?.map((bgColor, i) => (
                        <div key={i} style={{ backgroundColor: bgColor }} className="c-color">
                        </div>
                    ))}
                </div>

                {/* size  */}
                <div style={{marginTop: "16px"}}>
                    <ul className="product-size">
                        {
                            data?.size.map((size,i) =>  
                            <li key={i}>
                                <label className='size-style' htmlFor={size}>
                                    <input defaultChecked={size=="L"? true : false} type="radio" name="common" id={size} />
                                    <span >{size}</span>
                                </label> 
                            </li>)
                        } 
                    </ul>
                </div>

                {/* delivery guides  */}
                <div className="delivery" >
                    <div style={{display:"flex", alignItems:"center", gap:"18px"}}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 8.00002H20.4938C20.6432 7.99904 20.7894 8.04329 20.9132 8.12695C21.037 8.21061 21.1326 8.32977 21.1875 8.46877L22.5 11.75" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.5 14H16.5" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.625 20.75C18.8676 20.75 19.875 19.7426 19.875 18.5C19.875 17.2574 18.8676 16.25 17.625 16.25C16.3824 16.25 15.375 17.2574 15.375 18.5C15.375 19.7426 16.3824 20.75 17.625 20.75Z" stroke="#1D5C63" strokeWidth="1.5" strokeMiterlimit="10"/>
                            <path d="M6.375 20.75C7.61764 20.75 8.625 19.7426 8.625 18.5C8.625 17.2574 7.61764 16.25 6.375 16.25C5.13236 16.25 4.125 17.2574 4.125 18.5C4.125 19.7426 5.13236 20.75 6.375 20.75Z" stroke="#1D5C63" strokeWidth="1.5" strokeMiterlimit="10"/>
                            <path d="M15.375 18.5H8.625" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.125 18.5H2.25C2.05109 18.5 1.86032 18.421 1.71967 18.2803C1.57902 18.1397 1.5 17.9489 1.5 17.75V14M16.5 16.55V6.5H5M1.5 9.5H9.5M1.5 12H6.5" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 11.75H22.5V17.75C22.5 17.9489 22.421 18.1397 22.2803 18.2803C22.1397 18.421 21.9489 18.5 21.75 18.5H19.875" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p>Estemited Delivery Time : <span style={{color:"gray"}}>7 -10 days</span></p>
                    </div>

                    <div style={{display:"flex", alignItems:"center", gap:"18px", marginTop:"12px"}}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 4.25H18.75C18.9489 4.25 19.1397 4.32902 19.2803 4.46967C19.421 4.61032 19.5 4.80109 19.5 5V20.75C19.5 20.9489 19.421 21.1397 19.2803 21.2803C19.1397 21.421 18.9489 21.5 18.75 21.5H5.25C5.05109 21.5 4.86032 21.421 4.71967 21.2803C4.57902 21.1397 4.5 20.9489 4.5 20.75V5C4.5 4.80109 4.57902 4.61032 4.71967 4.46967C4.86032 4.32902 5.05109 4.25 5.25 4.25H9" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.25 7.25V6.5C8.25 5.50544 8.64509 4.55161 9.34835 3.84835C10.0516 3.14509 11.0054 2.75 12 2.75C12.9946 2.75 13.9484 3.14509 14.6517 3.84835C15.3549 4.55161 15.75 5.50544 15.75 6.5V7.25H8.25Z" stroke="#1D5C63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <p style={{fontWeight: "400"}}>Size Guide</p>
                    </div>
                </div>

                <div className="buttons" style={{marginTop:"60px", display:"flex", alignItems:"center" ,gap: "12px"}}>
                    <button className='add-btn'>ADD TO BAG</button>
                    <button className='buy-btn'>BUY NOW</button>
                </div>
            </div>
        </div>
        <div className="product-description">
           <div className="product-heading">
                <h3>Description</h3>
           </div>
           <p>{data?.desc}</p>
           
        </div>
        
        <div className="more-imgs">
            {
                data?.descImg.slice(0,3).map((img,i)=> 
                    <div className='extra-img-container' key={i}>
                        <img src={img} alt="" />
                        <div className="tooptip-container">
                            <svg className="dress-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9L9 3" stroke="#1A3C40" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.125 3H9V7.875" stroke="#1A3C40" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className='tooltip'>fabrics tooltip</span>
                        </div>
                    </div>
                    )
            }
        </div>
    </div>
  )
}

export default ProductDetails