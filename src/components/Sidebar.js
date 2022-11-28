import React from 'react'
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'no-underline  mt-7 pl-7 w-full h-11 flex justify-start items-center text-gray-500  text-base   py-4 font-normal bg-light'
    const normalLink = ' no-underline pl-7 mt-7 w-full h-11 flex justify-start items-center text-gray-500 text-base py-4 font-normal'

  return (
    <React.Fragment>
    <section>
      <div className="text-white">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
                         >
                        <span className='me-2 fs-4'>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar