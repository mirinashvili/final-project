import { UseGetOneProduct } from "../Hooks/UseGetOneProduct";
import './CartItem.scss'


type CartItemProps = {
    CartItemId : number;
}

export function CartItem ({CartItemId}: CartItemProps) {

    const {OneProduct: {data},
} = UseGetOneProduct({CartItemId});



    return (
        <div className='cart-modal-item grid align-center font-manrope py-2' >
                    <div className='cart-modal-item-img'>
                      <img src = {data?.thumbnail} alt = "" className='img-cover' />
                    </div>
                    <div className='cart-modal-item-title fs-13 font-manrope text-capitalize'>{data?.title}</div>
                    <div className='cart-modal-item-price text-orange fs-14 fw-6'>
                      ${data?.price}
                    </div>
                  </div>
                  
    
        )
}