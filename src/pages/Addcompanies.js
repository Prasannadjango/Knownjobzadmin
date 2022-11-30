import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
function Addcompanies() {

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New Company</h4>
          <Form className="Adminuser_form py-4">
            <label className="fs-6"> Company Logo:</label>
            <FormControl type='file' className="py-2 mb-3"/>
            <label className="fs-6">Company Name:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Company Email:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Password:</label>
            <FormControl type="Password" className="py-2 mb-3" />
            <label className="fs-6">Company CEO:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Industry:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Industry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Ownership-type:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Ownership-type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Company Details:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Location:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Google map:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Number of Offices:</label>
            <FormControl type="number" className="py-2 mb-3" />
            <label className="fs-6">Number of Employees:</label>
            <FormControl type="number" className="py-2 mb-3" />
            <label className="fs-6">Established in:</label>
            <FormControl type="number" className="py-2 mb-3" />
            <label className="fs-6">Fax:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Phone number:</label>
            <FormControl type="number" className="py-2 mb-3" />
            <label className="fs-6">Facebook id:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Twitter:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Pinterest:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Country:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Country</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">State:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Sate</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">City:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Packages:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Packages</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Is-Active:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <label className="fs-6">Is-Featured:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <Button className="Btn_color py-2 mt-2" type='sumbit'>Add New Company</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addcompanies;
