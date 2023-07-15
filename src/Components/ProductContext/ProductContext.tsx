import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';



export const ProductContext = createContext<any>(null);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>{
  const [products, setProducts] = useState<any>(null);
  

  useEffect(() => {
   
    const fetchGlobalData = async () => {
      try {
      const response = await axios.get(`https://dummyjson.com/products`);
        setProducts(response.data.products);
        
      } catch (error) {
        console.error('Error fetching global data:', error);
      }
    };
    fetchGlobalData(); // Call the fetch function when the component mounts
    
  }, []);

  

  return  (
          <ProductContext.Provider value={products}>
             {children}
          </ProductContext.Provider>
          )
}

export default ProductProvider