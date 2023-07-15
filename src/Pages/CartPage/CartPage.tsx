import React, {useContext, useState} from 'react'
import { GlobalContext } from '../../Components/CartContext/GlobalContext';
import { CartPageDetal } from './CartPageDetal';
import { Link } from 'react-router-dom';
import './CartPage.scss';




const CartPage: React.FC = () => {


  const {cartitem, setCartitem} = useContext(GlobalContext);

  const [total, setTotal] = useState (0)

  
  const clearCart = (() => {
     setCartitem ([])
  })

 if(cartitem.length === 0){
    return (
      <div className='container my-5'>
        <div className='empty-cart flex justify-center align-center flex-column font-manrope'>
          <img src ='https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png' alt = "" />
          <span className='fw-6 fs-15 text-gray'>Your shopping cart is empty.</span>
          <Link to = "/" className='shopping-btn bg-orange text-white fw-5'>Go shopping Now</Link>
        </div>
      </div>
    )
  }
  return (
 
     
          
          <div className='cart bg-whitesmoke'>
      <div className='container'>
        <div className='cart-ctable'>
    <div className='cart-chead bg-white'>
      <div className='cart-ctr fw-6 font-manrope fs-15'>
        <div className='cart-cth'>
          <span className='cart-ctxt'>S.N.</span>
        </div>
        <div className='cart-cth'>
          <span className='cart-ctxt'>Product</span>
        </div>
        <div className='cart-cth'>
          <span className='cart-ctxt'>Unit Price</span>
        </div>
        <div className='cart-cth'>
          <span className='cart-ctxt'>Quantity</span>
        </div>
        <div className='cart-cth'>
          <span className='cart-ctxt'>Total Price</span>
        </div>
        <div className='cart-cth'>
          <span className='cart-ctxt'>Actions</span>
        </div>
      </div>

      </div>
       </div>
       
       {cartitem.map((item) => {
          return <CartPageDetal CartItemId={item} key={item}></CartPageDetal>;
        })}


       <div>
       <div className='cart-cfoot flex align-start justify-between py-3 bg-white'>
         <div className='cart-cfoot-l'>
            <button type='button' className='clear-cart-btn text-danger fs-15 text-uppercase fw-4' >
               <i className='fas fa-trash'></i>
                 <span className='mx-1' onClick={clearCart}>Clear Cart</span>
            </button>
        </div>

<div className='cart-cfoot-r flex flex-column justify-end'>
  <div className='total-txt flex align-center justify-end'>
     <div className='font-manrope fw-5'>Total ({cartitem.length}) items: </div>
    <span className='text-orange fs-22 mx-2 fw-6'>{total}</span>
  </div> 

  <button type = "button" className='checkout-btn text-white bg-orange fs-16'>Check Out</button>
</div>
</div>
       </div>
    </div>
    </div>
    
        

     
   
  )
}

export default CartPage
