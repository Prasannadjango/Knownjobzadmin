import React from "react";
import * as FaIcons from "react-icons/fa";
import {
  Form,
 
  FormControl,

  Button,
} from "react-bootstrap";
const Addadminusers = () => {
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New Admin Users</h4>
          <Form className="Adminuser_form col-8 py-4">
            <label className="fs-6">Name:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">E-mail Address:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Password:</label>
            <FormControl type="password" className="py-2 mb-3" />
            <label className="fs-6">Role type:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select role</option>
              <option value="1">super admin</option>
              <option value="2">sub admin</option>
            
            </Form.Select>
            <Button className='Btn_color py-2 mt-2'>Create New User</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Addadminusers;
