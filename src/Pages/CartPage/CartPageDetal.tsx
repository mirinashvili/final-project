import { useContext, useCallback, useState } from "react";
import { UseGetOneProduct } from "../../Components/Hooks/UseGetOneProduct";
import './CartPageDetal.scss';
import { GlobalContext } from "../../Components/CartContext/GlobalContext";



type CartPageDetalProps = {
    CartItemId : number;
  
}

export function CartPageDetal ({CartItemId}: CartPageDetalProps) {

  const [amount, setAmount] = useState (1)
  const { setCartitem } = useContext(GlobalContext)

    const {OneProduct: {data}} = UseGetOneProduct({CartItemId});

const increaseQty = () => {
  setAmount((prevQty) => {
    let tempQty = prevQty + 1;
    if (data && tempQty > data.stock) {
      tempQty = data.stock;
    }
    return tempQty;
  });
};

const decreaseQty = () => {
  setAmount((prevQty) => {
    let tempQty = prevQty - 1;
    if (tempQty < 1) {
      tempQty = 1;
    }
    return tempQty;
  });
};


const HendleRemoveItem = useCallback(() => {

  setCartitem((prev ) => {
    const NewItem = prev.filter(
      (currentItemId) => currentItemId !== CartItemId
    )

    return NewItem
  })
}, [CartItemId])



    return ( 
        <>
        <div className='cart-cbody bg-white'>
        <div className='cart-ctr py-4' >
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{amount}</span>
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{data?.title}</span>
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>${data?.price}</span>
                    </div>
                    <div className='cart-ctd'>
                      <div className='qty-change flex align-center'>
                        <button type = "button" className='qty-decrease flex align-center justify-center'onClick={() => decreaseQty()} >
                          <i className='fas fa-minus'></i>
                        </button>

                        <div className='qty-value flex align-center justify-center'>
                          {amount}
                        </div>

                        <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                          <i className='fas fa-plus'></i>
                        </button>

                      </div>
                    
                    </div>

                    <div className='cart-ctd'>

                        <span className='cart-ctxt text-orange fw-5'> ${amount * data?.price}</span>
                    </div>

                    <div className='cart-ctd'>
                        <button type = "button" className='delete-btn text-dark' onClick={() => HendleRemoveItem ()} >Delete</button>
                    </div>
          


          
        </div>
  
    </div>



                  
</>
        )
}