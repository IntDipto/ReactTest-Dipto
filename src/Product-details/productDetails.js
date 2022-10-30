import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import './Product.css'

function ProductDetails() {
    const {id }= useParams()

    const [data,setData] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/products.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const product =  data.find(product => product.id == id)
            setData(product)
            
        })
    },[])

    console.log(data);

  return (
    <div  className='container'>
        <div className="product-details-container">
            <div className="img-slider">
                <div className=""></div>
                <div className="">
                    <img src={data?.imgMain} alt="" srcSet="" />
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

                    <p>{data?.rating} Ratings</p>
                </div>

                {/* selling  */}
                <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between",marginTop:"32px"}} className="selling">
                    <h5 >${data?.price}</h5>
                    <p>🔥 <span style={{fontWeight:"600"}}>20 sold </span> <span style={{fontWeight : '400'}}>within 1 hour</span></p>
                </div>

                {/* color  */}
                <div className="product-color" style={{marginTop:"32px"}}>
                    {data?.color?.map((bgColor, i) => (
                        <div key={i} style={{ backgroundColor: bgColor }} className="c-color"></div>
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
                <h1>Description</h1>
           </div>
           <p>{data?.desc}</p>
           
        </div>
        
        <div className="more-imgs">
            {
                data?.descImg.map(img=> 
                    <img style={{padding:"35px"}} src={img} alt="" />
                    )
            }
        </div>
    </div>
  )
}

export default ProductDetails