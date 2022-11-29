import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
function Addpackage() {

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New Package</h4>
          <Form className="Adminuser_form col-8 py-4">
        
              <label className="fs-6">Package-title:</label>
              <FormControl
                  type="text"
                  placeholder="Package-title..."
                  className="mb-3"
                />
                  <label className="fs-6">Package-Price (in USD):</label>
              <FormControl
                  type="text"
                  placeholder="Package-Price..."
                  className="mb-3"
                />
                  <label className="fs-6">Package-num of Days:</label>
              <FormControl
                  type="text"
                  placeholder="Package num days..."
                  className="mb-3"
                />
                 <label className="fs-6">Package-num listings:</label>
              <FormControl
                  type="text"
                  placeholder="Package num listings..."
                  className="mb-3"
                />
              <p>
              *On how many jobs a job seeker can apply

              </p>
              <p>
              **How many jobs an employer can post
              </p>
            <label className="fs-6">Package for?:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Job-seeker"
              />
              <Form.Check className="py-2 mb-3 me-3" type="checkbox" label="Employer" />
              <Form.Check className="py-2 mb-3 me-3" type="checkbox" label="CV search" />
              <Form.Check className="py-2 mb-3" type="checkbox" label="Ad" />
            </div>
           
            <Button className="Btn_color py-2 mt-2" type='sumbit'>Add New Package</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addpackage;
