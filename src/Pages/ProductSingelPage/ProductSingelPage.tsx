import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Components/ProductContext/ProductContext';
import { GlobalContext } from '../../Components/CartContext/GlobalContext';
import './ProductSingelPage.scss';




interface ProductSinglePage {
  id: number;
  description: string;
  category: string;
  brand: string;
  title: string;
  images: any[];
  price: number;
  rating: number;
  stock: number;
  discountedPrice: number;
  discountedPercentage: number;
}


 const ProductSinglePage: React.FC  = () =>  {

  const {setCartitem} = useContext(GlobalContext)
  const { id } = useParams<{ id: string }>();
  const products = useContext(ProductContext);
  const product = products.find((product: ProductSinglePage) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));

  
  
  

 

  useEffect(() => {
    if (products) {
      let discountedPrice = products.price - (products.price * (products.discountedPercentage / 100));
      let calculatedTotalPrice = quantity * discountedPrice;
      setTotalPrice(calculatedTotalPrice);
    }
  }, [products, quantity]);
    
    
    

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (products && tempQty > products.stock) {
        tempQty = products.stock;
      }
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) {
        tempQty = 1;
      }
      return tempQty;
    });
  };

  



 


  
  return (
    
     <main className='py-5 bg-whitesmoke'>
        
    <div className='product-single'>
      <div className='container'>
        <div className='product-single-content bg-white grid'>
          <div className='product-single-l'>
            <div className='product-img'>
             <div className='product-img-zoom'>
                <img src = {product?(product.images ? product.images[0] : "") : ""} alt = "" className='img-cover' />
              </div>
              <div className='product-img-thumbs flex align-center my-2'>
                <div className='thumb-item'>
                  <img src = {
                    product ? (product.images ? product.images[1] : "") : ""
                  } alt = "" className='img-cover' />
                </div>
                <div className='thumb-item'>
                  <img src = {
                    product ? (product.images ? product.images[2] : "") : ""
                  } alt = "" className='img-cover' />
                </div>
                <div className='thumb-item'>
                  <img src = {
                    product ? (product.images ? product.images[3] : "") : ""
                  } alt = "" className='img-cover' />
                </div>
                <div className='thumb-item'>
                  <img src = {
                    product ? (product.images ? product.images[4] : "") : ""
                  } alt = "" className='img-cover' />
                </div>
              </div>
            </div>
          </div>

          <div className='product-single-r'>
            <div className='product-details font-manrope'>
              <div className='title fs-20 fw-5'>{product?.title}</div>
              <div>
                <p className='para fw-3 fs-15'>{product?.description}</p>
              </div>
              <div className='info flex align-center flex-wrap fs-14'>
                <div className='rating'>
                  <span className='text-orange fw-5'>Rating:</span>
                  <span className='mx-1'>
                    {product?.rating}
                  </span>
                </div>
                <div className='vert-line'></div>
                <div className='brand'>
                  <span className='text-orange fw-5'>Brand:</span>
                  <span className='mx-1'>{product?.brand}</span>
                </div>
                <div className='vert-line'></div>
                <div className='brand'>
                  <span className='text-orange fw-5'>Category:</span>
                  <span className='mx-1 text-capitalize'>
                    {product?.category ? product.category.replace("-", " ") : ""}
                  </span>
                </div>
              </div>

              <div className = "price">
                <div className='flex align-center'>
                  <div className='old-price text-gray'>
                    {(product?.price)}
                  </div>
                  <span className='fs-14 mx-2 text-dark'>
                    Inclusive of all taxes
                  </span>
                </div>

                <div className='flex align-center my-1'>
                  <div className='new-price fw-5 font-poppins fs-24 text-orange'>
                    {(discountedPrice)}
                  </div>
                  <div className='discount bg-orange fs-13 text-white fw-6 font-poppins'>
                    {product?.discountedPercentage}% OFF
                  </div>
                </div>
              </div>

              <div className='qty flex align-center my-4'>
                <div className='qty-text'>Quantity:</div>
                <div className='qty-change flex align-center mx-3'>
                  <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                    <i className='fas fa-minus'></i>
                  </button>
                  <div className = "qty-value flex align-center justify-center">{quantity}</div>
                  <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                    <i className='fas fa-plus'></i>
                  </button>
                </div>
                {
                  (product?.stock === 0) ? <div className ='qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>out of stock</div> : ""
                }
              </div>

              <div className='btns'>
                <button type = "button" className='add-to-cart-btn btn'  onClick={() => setCartitem((prev) => [...prev, product.id])}>
                  <i className='fas fa-shopping-cart'></i>
                  <span className='btn-text mx-2'>add to cart</span>
                  
                
                </button>
            
                
                <button type = "button" className='buy-now btn mx-3'>
                  <span className='btn-text'>buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </main>
  )
}

export default ProductSinglePage
