import React, { useContext, Fragment, FC } from 'react';
import { ProductContext } from '../../Components/ProductContext/ProductContext';
import Slidebar from '../../Components/Slidebar/Slidebar';
import {Product}  from '../../Components/Product/Product';
import './HomePage.scss';


interface Product {
  id: string;
  category: string;
  brand: string;
  title: string;
  images: string[];
  price: number;
  discountedPrice:number;
  discountedPercentage: number;
  discountPercentage: number;
}

interface HomepageProps {
  translate: (key: string) => string
}

const HomePage: FC<HomepageProps> = ({ translate })  => {

  const products: Product[] | null = useContext(ProductContext);

  return ( 
    <Fragment>
    <div>
      <Slidebar />
      <main>

      <div className='title-md'>
                <h3>{translate('SeeProduct')}</h3>
              </div>
      <section className='section'>
             
        {products && products.length > 0 ? (
          products.map((product: Product) => {
            return <Product product={product} key={product.id} {...product}/>;

            
          })
        ) : (
          <p> No products available</p>
        )}
        
      </section>
      </main>
    </div>
    </Fragment>
  );
};

export default HomePage;



