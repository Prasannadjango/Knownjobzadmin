import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import SidebarData from "../data/SidebarData";

const MainPage = () => {
  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      {/* sidebar section */}
      <div className="w-100 Mainpage-section">
        <div className="d-flex">
          <SidebarData />
           <div className="w-100 ">
           <NavPage  className='m-4'/>
           </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
