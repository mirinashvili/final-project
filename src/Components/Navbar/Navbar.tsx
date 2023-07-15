import React, { useContext, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';
import { ProductContext } from '../ProductContext/ProductContext';
import ProductSinglePage from '../../Pages/ProductSingelPage/ProductSingelPage';
import { GlobalContext } from '../CartContext/GlobalContext';
import { useParams } from 'react-router-dom';

interface NavbarProps {
  translate: (key: string) => string
}


export const Navbar: React.FC<NavbarProps>  = ({ translate }) => {


  const [searchTerm, setSearchTerm] = useState("");

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const {cartitem} = useContext(GlobalContext);
  const { id } = useParams<{ id: string }>();

  const products = useContext(ProductContext) || [];
  const product = products.find((product: ProductSinglePage) => product.id === Number(id));

  
  const category = products.map((item: { category: any; }) => item.category);
  const uniqueWords = category.filter((word: any, index: any) => category.indexOf(word) === index);

  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type="button" className='sidebar-show-btn text-white' onClick={toggleSidebar}>
            <i className='fas fa-bars'></i>
          </button>
          <Link to="/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Snap</span>Up.
            </span>
          </Link>
        </div>

        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type="text" className='form-control fs-14' placeholder={translate('Search')}onChange={(e) => handleSearchTerm(e)} />
              <Link to={`search/${searchTerm}`} className='text-white search-btn flex align-center justify-center' >
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </div>
          </div>

          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
        {uniqueWords.map((category: string, idx: React.Key | null | undefined) => (
          <li className='nav-item no-wrap' key={idx}>
            <Link to={`/category/${category}`} className='nav-link text-capitalize'>
              {category.replace('-', ' ')}
            </Link>
          </li>
        ))}
      </ul>
        </div>

        <div className='navbar-cart flex align-center'>
          <Link to='/CartPage' className='cart-btn'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='cart-items-value'>{cartitem.length}</div>
            <CartModal />
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

