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
import Listcountries from "../pages/Listcountries";
import Addcountries from "../pages/Addcountries";
import Liststate from "../pages/Liststate";
import Addstate from "../pages/Addstate";
import Addcity from "../pages/Addcity";
import Listcity from "../pages/Listcity";
import ListPackages from "../pages/Listpackages";
import Addpackage from "../pages/Addpackage";
import Listcareerlevel from "../pages/Listcareerlevel";
import Addcareerlevel from "../pages/Addcareerlevel";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listadduser" element={<Listadduser />} />
          <Route path="/Addadminusers" element={<Addadminusers />} />
          <Route path="/Listad" element={<Listad />} />
          <Route path="/Addads" element={<Addads />} />
          <Route path="/Listjobs" element={<Listjob />} />
          <Route path="/Addjobs" element={<Addjobs />} />
          <Route path="/Listusers" element={<Listusers />} />
          <Route path="/Adduser" element={<Addusers />} />
          <Route path="/Listcompanies" element={<Listcompanies />} />
          <Route path="/Addcompanies" element={<Addcompanies />} />
          <Route
            path="/companypaymenthistory"
            element={<Companypaymenthistory />}
          />
          <Route path="/Listcms" element={<Listcms />} />
          <Route path="/Addcmspage" element={<Addcmspage />} />
          <Route path="/ListTranslatedpage" element={<ListTranslatedpage />} />
          <Route path="/AddLanguage" element={<AddLanguage />} />
          <Route path="/ListLanguages" element={<ListLanguage />} />
          <Route path="/Listcountries" element={<Listcountries />} />
          <Route path="/Addcountry" element={<Addcountries />} />
          <Route path="/Liststate" element={<Liststate />} />
          <Route path="/Addstate" element={<Addstate />} />
          <Route path="/Addcity" element={<Addcity />} />
          <Route path="/Listcity" element={<Listcity />} />
          <Route path="/Listpackages" element={<ListPackages />} />
          <Route path="/Addpackages" element={<Addpackage />} />
          <Route path='/Listcareerlevel' element={<Listcareerlevel/>}/>
          <Route path="/Addcareerlevel" element={<Addcareerlevel/>}/>
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
