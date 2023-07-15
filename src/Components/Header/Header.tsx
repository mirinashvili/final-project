
import { Navbar } from '../Navbar/Navbar';
import React, { useCallback, useState, useEffect, useRef, useContext, FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import { LangContext } from '../lang';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}


export const Header: FC<HeaderProps> = ({ fixed, transparent })=> {


  const { state: { language}, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  let headerClass = 'header';

  if(fixed) {
    headerClass += ' header--fixed';
  }

  if(transparent) {
    headerClass += ' header--transparent';
  }

  const handleClickOutside = useCallback((e:any) => {
    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(true);
    }
    
  }, [showDropdown, setShowDropdown, dropdownEl]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    setLanguage(value);
  }

  
  return (
    <div>
      <header className='header text-white' >
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <ul className='flex top-links align-center'>
                <li>
                  <Link to = "/seller">{translate('Seller')}</Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/download">{translate('Download')}</Link>
                </li>
                <li className='vert-line'></li>
                <li className='flex align-center'>
                  <span className='fs-13'>{translate('follow')}</span>
                  <ul className='social-links flex align-center'>
                    <li className='mx-2'>
                      <a href = "www.facebook.com" className='fs-15'>
                        <i className='fab fa-facebook'></i>
                      </a>
                    </li>
                    <li className='mx-2'>
                      <a href = "www.instagram.com" className='fs-15'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='header-cnt-top-r'>

           

           

              <ul className='top-links flex align-center'>
                <div className='lang'>
              <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => chooseLanguageHandler('EN')}>EN <img src="" alt="" /></li>   
                <li onClick={() => chooseLanguageHandler('KA')}>KA</li>  
              </ul>
            }
            </div>
                <li>
               <Link to = "/" className='top-link-itm'>
                    <span className='top-link-itm-ico mx-2'>
                      <i className='fa-solid fa-circle-question'></i>
                    </span>
                    <span className='top-link-itm-txt'>{translate('supprot')}</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/ContactUs" >
                    <span className='top-link-itm-txt'>{translate('Contact')}</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/SingIn">
                    <span className='top-link-itm-txt'>{translate('Log in')}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Navbar translate={translate}/>
          <div className='header-cnt-bottom'>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};




