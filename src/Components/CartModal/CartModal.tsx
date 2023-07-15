import React, {useContext} from 'react'
import { ProductContext } from '../ProductContext/ProductContext';
import { GlobalContext } from '../CartContext/GlobalContext';
import { CartItem } from './CartItem';
import './CartModal.scss'
import { json } from 'stream/consumers';



type Product = {
    id: number;
    category: string;
    title: string,
    thumbnail:string
    price:any,
    discountPercentage:number

  };
  

const CartModal: React.FC = () => {

const {cartitem} = useContext(GlobalContext);


  return (
  <div className='cart-modal'>
       <h5 className='cart-modal-title fw-5 fs-15 font-manrope text-center'>Recenlty Added Products</h5>
       
       {
        (cartitem?.length > 0) ? (
          <div className='cart-modal-list grid'>
            {
              cartitem.map(itemId => {
                return (
                  <CartItem CartItemId={itemId} key={itemId}></CartItem>
                )
              })
            }

            <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center'>view my shopping cart</div>
          </div>) : (
          <div className = "flex flex-column align-center justify-center cart-modal-empty">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiRBR_19JyGdceNZQ2iizUZcJWO53gWLUrkIlvTDAyTK_FBZcQvLNWfnluWoWEctpUE&usqp=CAU" alt="" />
            <h6 className='text-dark fw-4'>No products yet</h6>
          </div>
        )
      }
          
        

  </div>
  )
  
}

export default CartModal