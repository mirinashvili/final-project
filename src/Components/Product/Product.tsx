
import React, { useContext } from 'react';
import './Product.scss'
// import { ProductContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';

interface Product {
  discountPercentage: number;
  id: string;
  category: string;
  brand: string;
  title: string;
  images: any;
  price: number;
  discountedPercentage:number


}

export  const Product: React.FC<{ product: Product }> = ({ product }) => {
//   const products: Product | null = useContext(ProductContext);
// let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));


  return (
    
    <Link to = {`/product/${product?.id}`} key = {product?.id}>
    <div className='product-item bg-white'>
        <div className='category'>{product?.category}</div>
             <div className='product-item-img'>
                 <img className='img-cover' src={product.images[0]} alt=''/>
             </div>
        <div className='product-item-info fs-14'>
             <div className='brand'>
                <span>Brand: </span>
                <span className='fw-7'>{product?.brand}</span>
             </div>
             <div className='title py-2'>{product?.title}</div>
         
          <div className='price flex align-center justify-center'>
            <span className='old-price'>{(product?.price)} </span>
            <span className='new-price'> {(product?.price) - (product?.price * (product?.discountPercentage / 100))}</span>
            <span className='discount fw-6'>({product?.discountedPercentage}% Off) </span>
          </div>
      </div>
    </div>
    </Link>
  );
};







