import React from "react";
import {
  Form,
  Table,
  Modal,
  FormControl,
  Pagination,
  Button,
} from "react-bootstrap";
function Addads() {
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New Ads</h4>
          <Form className="Adminuser_form col-8 py-4">
            <label className="fs-6">Choose Company:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Company</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Ad Title:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Ad Image:</label>
            <FormControl type="file" className="py-2 mb-3" />
            <label className="fs-6">Ad Expiry-date:</label>
            <FormControl type="date" className="py-2 mb-3" />
            <label className="fs-6">Is-Active?:</label>
              <div className="d-flex">
              <Form.Check  className="py-2 mb-3 me-3" 
            type='checkbox'
            label='Yes'
          />
           <Form.Check  className="py-2 mb-3" 
            type='checkbox'
            label='No'
          />
              </div>
            <Button className="Btn_color py-2 mt-2">Create New Ads</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addads;
