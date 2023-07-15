import React, { lazy, Suspense, FC, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';

import { LangContext } from './Components/lang';


const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const CartPage = lazy(() => import('./Pages/CartPage/CartPage'));
const CategoryProductPage = lazy(() => import('./Pages/CategoryProductPage/CategoryProductPage'));
const ProductSinglePage = lazy(() => import('./Pages/ProductSingelPage/ProductSingelPage'));
const SearchPage = lazy(() => import('./Pages/SearchPage/SearchPage'));
const SingIn = lazy(() => import('./Pages/SingIn/SingIn'))
const Registration = lazy(() => import('./Pages/Registartion/Registration'))
const ContactUs = lazy(() => import('./Pages/ContactUs/ContactUs'))

function App () {

  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/"  element={<HomePage translate={translate} />} />
            <Route path="/SingIn" element={<SingIn translate={translate}/>} />
            <Route path="/registration" element={<Registration  translate={translate}/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/category/:category" element={<CategoryProductPage />} />
            <Route path="/product/:id" element={<ProductSinglePage/>} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
