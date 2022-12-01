
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Link } from 'react-router-dom';

import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar } from "react-pro-sidebar";
function SidebarData() {
  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <Sidebar>
        <Menu>
        <MenuItem icon={<FaIcons.FaHome className="fs-5"/>} routerLink={<Link to="/" />} > Dashboard</MenuItem>
          <SubMenu icon={ <FaIcons.FaUserCheck className="fs-5"/>} label="Admin users">
            <MenuItem routerLink={<Link to="/Listadduser" />}> List all Admin-users </MenuItem>
            <MenuItem routerLink={<Link to="/Addadminusers" />}> Add Admin-users</MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaAdversal className="fs-5"/>} label="Ad">
            <MenuItem routerLink={<Link to="/Listad"/>}> List Ad </MenuItem>
            <MenuItem routerLink={<Link to='/Addads'/>}> Add New Ads </MenuItem>
          </SubMenu>
          
          <SubMenu icon={ <FaIcons.FaBriefcase className="fs-5"/>} label="Jobs">
            <MenuItem routerLink={<Link to='/Listjobs'/>}> List Jobs </MenuItem>
            <MenuItem routerLink={<Link to='/Addjobs'/>}> Add Jobs </MenuItem>
          </SubMenu>
          


          <SubMenu icon={ <FaIcons.FaRegAddressCard className="fs-5"/>} label="Company">
            <MenuItem routerLink={<Link to='/Listcompanies'/>}> List Companies </MenuItem>
            <MenuItem routerLink={<Link to='/Addcompanies'/>}> Add Companies </MenuItem>
            <MenuItem routerLink={<Link to='/companypaymenthistory'/>}>  Payment History</MenuItem>
          </SubMenu>

          <SubMenu icon={ <BaIcons.BsFillFilePersonFill  className="fs-5"/>} label="User-Profiles">
            <MenuItem routerLink={<Link to='/Listusers'/>}> List User-Profiles </MenuItem>
            <MenuItem routerLink={<Link to='/Adduser'/>}> Add User-Profiles </MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaTasks className="fs-5"/>} label="C.M.S">
            <MenuItem routerLink={<Link to='/Listcms'/>}> List C.M.S </MenuItem>
            <MenuItem routerLink={<Link to='/Addcmspage'/>}> Add C.M.S </MenuItem>
            <MenuItem routerLink={<Link to='/ListTranslatedpage'/>}> List Translated Pages </MenuItem>
            <MenuItem > Add New Translated Page </MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaLanguage className="fs-5"/>} label="Languages">
            <MenuItem routerLink={<Link to='/ListLanguages'/>}> List Languages </MenuItem>
            <MenuItem routerLink={<Link to='/AddLanguage'/>}> Add Languages</MenuItem>
          </SubMenu>
              
          <SubMenu icon={ <FaIcons.FaLanguage className="fs-5"/>} label="Language-Level">
            <MenuItem routerLink={<Link to='/Listlanguagelevel'/>}> List Language-levels </MenuItem>
            <MenuItem routerLink={<Link to='/AddLanguagelevel'/>}> Add Language-levels</MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaGlobeAsia className="fs-5"/>} label="Countries">
            <MenuItem routerLink={<Link to='/Listcountries'/>}> List Countries </MenuItem>
            <MenuItem routerLink={<Link to='/Addcountry' />}>Add Countries</MenuItem>
          </SubMenu>

          <SubMenu icon={<BaIcons.BsCursorFill className="fs-5"/>} label="State">
            <MenuItem routerLink={<Link to='/Liststate'/>}> List State </MenuItem>
            <MenuItem routerLink={<Link to='/Addstate'/>}> Add State</MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaCity className="fs-5"/>} label="City">
            <MenuItem routerLink={<Link to='/Listcity' />}> List Cities </MenuItem>
            <MenuItem routerLink={<Link to='/Addcity' />}>Add City</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaInbox className="fs-5"/>} label="Packages">
            <MenuItem routerLink={<Link to='/Listpackages' />}> List Packages</MenuItem>
            <MenuItem routerLink={<Link to='/Addpackages' />}> Add Packages</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaGraduationCap className="fs-5"/>} label="Career-level">
            <MenuItem routerLink={<Link to='/Listcareerlevel' />}> List Career-level</MenuItem>
            <MenuItem routerLink={<Link to='/Addcareerlevel' />}> Add Career-level</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaBuilding  className="fs-5"/>} label="Functional-areas">
            <MenuItem routerLink={<Link to='/Listfunctionalarea' />}> List Functional-areas</MenuItem>
            <MenuItem routerLink={<Link to='/Addfunctionalarea' />}> Add Functional-areas</MenuItem>
          </SubMenu>

          <SubMenu icon={<BaIcons.BsGenderAmbiguous className="fs-5"/>} label="Gender">
            <MenuItem routerLink={<Link to='/Listgender'/>}> List Gender</MenuItem>
            <MenuItem routerLink={<Link to='/Addgender'/>}> Add Gender</MenuItem>
          </SubMenu>
          
          <SubMenu icon={<FaIcons.FaBuilding className="fs-5"/>} label="Industries">
            <MenuItem routerLink={<Link to='/Listindustry'/>}> List Industries</MenuItem>
            <MenuItem routerLink={<Link to='/Addindustry'/>}> Add Industries</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaUserTie className="fs-5"/>} label="Job-Experience">
            <MenuItem routerLink={<Link to='/Listjobexperience'/>}> List Job-Experience</MenuItem>
            <MenuItem routerLink={<Link to='/Addjobexperience'/>}> Add Job-Experience</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaUserClock  className="fs-5"/>} label="Job-Shifts">
            <MenuItem routerLink={<Link to='/Listjobshift'/>}> List Job-Shifts</MenuItem>
            <MenuItem routerLink={<Link to='/Addjobshift'/>}> Add Job-Shifts</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaSortAlphaUp  className="fs-5"/>} label="Job-Skills">
            <MenuItem routerLink={<Link to='/Listjobskills'/>}> List Job-Skills</MenuItem>
            <MenuItem routerLink={<Link to='/Addjobskill'/>}> Add Job-Skills</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaUserTie  className="fs-5"/>} label="Degree-level">
            <MenuItem routerLink={<Link to='/Listdegreelevel'/>}> List Degree level</MenuItem>
            <MenuItem routerLink={<Link to='/Adddegreelevel'/>}> Add Degree level</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaBook  className="fs-5"/>} label="Degree-types">
            <MenuItem routerLink={<Link to='/Listdegreetype'/>}> List Degree Types</MenuItem>
            <MenuItem routerLink={<Link to='/Adddegreetype'/>}> Add Degree Types</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaBook  className="fs-5"/>} label="Major-subjects">
            <MenuItem routerLink={<Link to='/Listmajorsubjects'/>}> List Major-subjects</MenuItem>
            <MenuItem routerLink={<Link to='/Addmajorsubjects'/>}> Add Major-subjects</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaGraduationCap  className="fs-5"/>} label="Result types">
            <MenuItem routerLink={<Link to='/Listresulttype'/>}> List Result types</MenuItem>
            <MenuItem routerLink={<Link to='/Addresulttypes'/>}> Add Result types</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaVenusMars className="fs-5"/>} label="Marital-status">
            <MenuItem routerLink={<Link to='/Listmaritalstatus'/>}> List Marital-status</MenuItem>
            <MenuItem routerLink={<Link to='/Addmaritalstatus'/>}> Add Marital-status</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaUser  className="fs-5"/>} label="Ownership-types">
            <MenuItem routerLink={<Link to='/Listownershiptypes'/>}> List Ownership-types</MenuItem>
            <MenuItem routerLink={<Link to='/Addownershiptypes'/>}> Add Ownership-types</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaMoneyBillAlt className="fs-5"/>} label="Salary-Periods">
            <MenuItem  routerLink={<Link to='/Listsalaryperiods'/>}> List Salary-Periods</MenuItem>
            <MenuItem routerLink={<Link to='/Addsalaryperiods'/>}> Add Salary-Periods</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaCog className="fs-5"/>} label="Site-settings">
            <MenuItem> Manage Site-settings</MenuItem>
            
          </SubMenu>
        </Menu>
      </Sidebar>
      <main>
        <button className ='m-2' onClick={() => collapseSidebar()}><FaIcons.FaAlignLeft/></button>
      </main>
    </>
  );
}
export default SidebarData;
