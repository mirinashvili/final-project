import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { type } from 'os';



const Sidebar: React.FC = () => {
  const [isSidebarOn, setSidebarOn] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const { category} = useParams ()

//   const CategoryProduct = async () => {

//     try {
        
//         const resp = await axios.get (
//         `https://dummyjson.com/products`);
//         setCategories(resp.data.products)
//     } 
   
//     catch (error:any){
        
//     }
// }




//   useEffect(() => {
//     // Simulating async data fetching
//     CategoryProduct();
//   }, []);

//   const fetchCategories = () => {
//     // Simulating API call to fetch categories
//     setTimeout(() => {
//       const fetchedCategories = ['category1', 'category2', 'category3'];
//       setCategories(fetchedCategories);
//     }, 1000);
//   };

  const toggleSidebar = () => setSidebarOn(false);
    
    
    
    
  

  return (
    
    
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ''}`}>
      <button type="button" className="sidebar-hide-btn" onClick={toggleSidebar}>
        <i className="fas fa-times"></i>
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">All Categories</div>
        {/* <ul className="cat-list">
          {categories.map((category: string, idx: number) => {
            return (
              <li key={idx} onClick={toggleSidebar}>
                <Link to={`/category/${category}`} className="cat-list-link text-capitalize">
                  <div>mamuka</div>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
    </aside>
  );
};

export default Sidebar;
