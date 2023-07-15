import React, {useState, useEffect} from 'react'
import axios from "axios";
import { error } from 'console';


type UseGetOneProductProps = {
    CartItemId: number
}

export function UseGetOneProduct ({CartItemId}: UseGetOneProductProps) {

    const [OneProduct, setOneProduct] = useState<{
        data?:any;
        loading:boolean;
        error?:string;
    }>({
        data:undefined,
        loading:false,
        error:undefined,


    })
    
    
    

    const getProduct = async (CartItemId: number) => {

        try {
            setOneProduct((prev) =>({...prev, loading:true}))
            const resp = await axios.get (
            `https://dummyjson.com/products/${CartItemId}`);
            setOneProduct((prev) =>({...prev, loading:true, data: resp.data}))
        } 
       
        catch (error:any){
            setOneProduct((prev) =>({...prev, loading: false,error: error.message }))
        }
      

}
    useEffect(() => {getProduct(CartItemId)
}, [CartItemId])
    
    return {OneProduct}
}