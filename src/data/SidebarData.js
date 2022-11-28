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
        <MenuItem icon={<FaIcons.FaHome className="fs-5"/>} routerLink={<Link to="/" />}> Dashboard</MenuItem>
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
            <MenuItem>  Payment History</MenuItem>
          </SubMenu>

          <SubMenu icon={ <BaIcons.BsFillFilePersonFill  className="fs-5"/>} label="User-Profiles">
            <MenuItem routerLink={<Link to='/Listusers'/>}> List User-Profiles </MenuItem>
            <MenuItem routerLink={<Link to='/Adduser'/>}> Add User-Profiles </MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaTasks className="fs-5"/>} label="C.M.S">
            <MenuItem> List C.M.S </MenuItem>
            <MenuItem> Add C.M.S </MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaLanguage className="fs-5"/>} label="Languages">
            <MenuItem> List Languages </MenuItem>
            <MenuItem> Add Languages</MenuItem>
          </SubMenu>

          <SubMenu icon={ <FaIcons.FaGlobeAsia className="fs-5"/>} label="Countries">
            <MenuItem> List Countries </MenuItem>
            <MenuItem> Add Countries</MenuItem>
          </SubMenu>

          <SubMenu icon={<BaIcons.BsCursorFill className="fs-5"/>} label="State">
            <MenuItem> List State </MenuItem>
            <MenuItem> Add State</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaInbox className="fs-5"/>} label="Packages">
            <MenuItem> List Packages</MenuItem>
            <MenuItem> Add Packages</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaGraduationCap className="fs-5"/>} label="Career-level">
            <MenuItem> List Career-level</MenuItem>
            <MenuItem> Add Career-level</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaBuilding  className="fs-5"/>} label="Functional-areas">
            <MenuItem> List Functional-areas</MenuItem>
            <MenuItem> Add Functional-areas</MenuItem>
          </SubMenu>

          <SubMenu icon={<BaIcons.BsGenderAmbiguous className="fs-5"/>} label="Gender">
            <MenuItem> List Gender</MenuItem>
            <MenuItem> Add Gender</MenuItem>
          </SubMenu>
          
          <SubMenu icon={<FaIcons.FaBuilding className="fs-5"/>} label="Industries">
            <MenuItem> List Industries</MenuItem>
            <MenuItem> Add Industries</MenuItem>
          </SubMenu>

          <SubMenu icon={<FaIcons.FaUserTie className="fs-5"/>} label="Job-Experience">
            <MenuItem> List Job-Experience</MenuItem>
            <MenuItem> Add Job-Experience</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaUserClock  className="fs-5"/>} label="Job-Shifts">
            <MenuItem> List Job-Shifts</MenuItem>
            <MenuItem> Add Job-Shifts</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaUserTie  className="fs-5"/>} label="Degree-level">
            <MenuItem> List Degree level</MenuItem>
            <MenuItem> Add Degree level</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaGraduationCap  className="fs-5"/>} label="Result types">
            <MenuItem> List Result types</MenuItem>
            <MenuItem> Add Result types</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaVenusMars className="fs-5"/>} label="Marital-status">
            <MenuItem> List Marital-status</MenuItem>
            <MenuItem> Add Marital-status</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaUser  className="fs-5"/>} label="Ownership-types">
            <MenuItem> List Ownership-types</MenuItem>
            <MenuItem> Add Ownership-types</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaIcons.FaMoneyBillAlt className="fs-5"/>} label="Salary-Periods">
            <MenuItem> List Salary-Periods</MenuItem>
            <MenuItem> Add Salary-Periods</MenuItem>
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
