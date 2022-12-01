import React from "react";
import { BsBook } from 'react-icons/bs'
import Logo from '../Assests/Images/Knownjobz logo.jpeg'
import { MdOutlineMarkunread,MdNotificationsActive } from "react-icons/md";
const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-light h-20 w-full position-fixed navbar-sec'>
          <div className="d-flex justify-content-between py-3 ps-3 align-content-center align-items-center">
            <div className="Logo-container ">
              <img src={Logo} className='w-100 ' />
            </div>
            <div className="pe-5 d-flex">
              <MdNotificationsActive className="fs-4 text-secondary me-4"/>
              <MdOutlineMarkunread className="fs-4 text-secondary"/>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
