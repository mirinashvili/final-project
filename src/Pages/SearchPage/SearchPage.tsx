import React, { useEffect, useState } from 'react';
import './SearchPage.scss'
import { useParams } from 'react-router-dom';
import { Product } from '../../Components/Product/Product';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Components/ProductContext/ProductContext';
import axios from 'axios';

type ProductProps = {
  id: number;
  name: string;
  price: number;
  title :string;
  category : string;
  brand: string;
  discountedPercentage: number;
  discountPercentage:number
  images: string
}



  const SearchPage: React.FC = () => {
  const {searchTerm} = useParams()

  // const [searchTerm, setSearchTerm] = useState('');
  const [searchProducts, setSearchProducts] = useState<ProductProps[]>([]);
  const [searchProductsStatus, setSearchProductsStatus] = useState();

  const handleSearch = async () => {

    try {
        
        const resp = await axios.get (
        `https://dummyjson.com/products/search?q=${searchTerm}`);
        setSearchProducts(resp.data.products)
    } 
   
    catch (error:any){
        
    }
}


  useEffect(() => {
    handleSearch();
  }, [searchTerm]);


  if(searchProducts.length === 0){
    return (
      <div className='container' style = {{
        minHeight: "70vh"
      }}>
        <div className='fw-5 text-danger py-5'>
          <h3>No Products found.</h3>
        </div>
      </div>
    )
  }

   
   

  return (
    <main>
     
            <div className='title-md'>
              <h3>Search results:</h3>
            </div>
           <div className='searchBox'>
          {
           
           searchProducts.map ((item) => {
            return  <Link to = {`/product/${item?.id}`} key = {item?.id}>
            <div className='product-item bg-white'>
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
                    <span className='new-price'> {(item?.price) - (item?.price * (item?.discountPercentage / 100))}</span>
                    <span className='discount fw-6'>({item?.discountedPercentage}% Off) </span>
                  </div>
              </div>
            </div>
            </Link>
           })
          }
          </div>
           
      
    </main>
  )
};

export default SearchPage;

