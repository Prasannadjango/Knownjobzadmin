import React from "react";
import {BsBook} from 'react-icons/bs'
import Logo from '../Assests/Images/Knownjobz logo.jpeg'

const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-light h-20 w-full '>
            

            <div className="Logo-container ">
              <img src={Logo} className='w-100 '/>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
