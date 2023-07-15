import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Product } from '../../Components/Product/Product';
import { ProductContext } from '../../Components/ProductContext/ProductContext';
import './CategoryProductPage.scss'

import { Key } from 'node:readline';


interface CategoryProductPage {
  id : number
  category: string
  product : []
}

const CategoryProductPage: React.FC = () => {


  const products = useContext(ProductContext);
  const { category } = useParams<{ category: string }>();
  const product = products.filter((item: { category: string; }) => item.category === String(category) )
  
  

  return (
    
    <div className='cat-products py-5 bg-whitesmoke'>
      <div className='title-md'>
            <h3>See our <span className='text-capitalize'>{category}</span></h3>
          </div>
    <div className='container'>
      <div className='cat-products-content'>
      
          {
          product.map ((item: any) => {
            return (
              
            <Link to = {`/product/${item?.id}`} key = {item?.id}>
             
            <div className='product-item bg-white m-0'>
            <div className='category'>{item?.category}</div>
                 <div className='product-item-img'>
                     <img className='img-cover' src={item.images[0]} alt=''/>
                 </div>
            <div className='product-item-info fs-14'>
                 <div className='brand'>
                    <span>Brand: </span>
                    <span className='fw-7'>{item?.brand}</span>
                 </div>
                 <div className='title py-2'>{item?.title}</div>
             
              <div className='price flex align-center justify-center'>
                <span className='old-price'>{(item?.price)} </span>
                <span className='new-price'> {( Math.round(item?.price / ((item.discountPercentage / 100)+1) ))}</span>
                <span className='discount fw-6'>({item?.discountPercentage}% Off) </span>
              </div>
          </div>
        </div>
        </Link>
        )
          })
        }
      </div>
    </div>
  </div>
  )
}

export default CategoryProductPage
