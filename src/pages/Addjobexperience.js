import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
function Addjobexperience() {
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New job-Experience</h4>
          <Form className="Adminuser_form col-8 py-4">
            <label className="fs-6">Languages:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Language</option>
              <option value="10">show 10 Records</option>
              <option value="25">Show 25 Records</option>
              <option value="50">Show 50 Records</option>
            </Form.Select>
            
          
            <label className="fs-6">Job-experience:</label>
            <FormControl type="text" placeholder="Job-experience"  className="py-2 mb-3"/>
            
            <label className="fs-6">Is-Active?:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>

            <label className="fs-6">Is-Default?:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>

            <Button className="Btn_color py-2 mt-2" type="sumbit">
              Add New jobexperience
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addjobexperience;
