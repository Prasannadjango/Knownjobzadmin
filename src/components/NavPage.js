import React from "react";
import { Routes, Route } from "react-router-dom";

import Addadminusers from "../pages/Addadminusers";
import Home from "../pages/Home";
import Listadduser from "../pages/Listadduser";
import Listad from "../pages/Listad";
import Addads from "../pages/Addads";
import Listjob from "../pages/Listjobs";
import Addjobs from "../pages/Addjobs";
import Listusers from "../pages/Listusers";
import Addusers from "../pages/Addusers";
import Listcompanies from "../pages/Listcompanies";
import Addcompanies from "../pages/Addcompanies";
import Companypaymenthistory from "../pages/Companypaymenthistory";
import Listcms from "../pages/Listcms";
import Addcmspage from "../pages/Addcmspage";
import ListTranslatedpage from "../pages/ListTranslatedpage";
import AddLanguage from "../pages/AddLanguages";
import ListLanguage from "../pages/ListLanguages";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listadduser" element={<Listadduser />} />
          <Route path="/Addadminusers" element={<Addadminusers />} />
          <Route path="/Listad" element={<Listad />} />
          <Route path="/Addads" element={<Addads/>}/>
          <Route path='/Listjobs' element={<Listjob/>}/>
          <Route path='/Addjobs' element={<Addjobs/>}/>
          <Route path='/Listusers' element={<Listusers/>}/>
          <Route path='/Adduser' element={<Addusers/>}/>
          <Route path="/Listcompanies" element={<Listcompanies/>}/>
          <Route path="/Addcompanies" element={<Addcompanies/>}/>
          <Route path="/companypaymenthistory" element={<Companypaymenthistory/>}/>
          <Route path='/Listcms' element={<Listcms/>}/>
          <Route path="/Addcmspage" element={<Addcmspage/>}/>
          <Route path='/ListTranslatedpage' element={<ListTranslatedpage/>}/>
          <Route path='/AddLanguage' element={<AddLanguage/>}/>
          <Route path="/ListLanguages" element={<ListLanguage/>}/>
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
