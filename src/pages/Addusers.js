import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
function Addusers() {
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New User</h4>
          <Form className="Adminuser_form col-8 py-4">
          <label className="fs-6">User Photo:</label>
            <FormControl type="file" className="py-2 mb-3" />
            <label className="fs-6">First Name:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Middle Name:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Last Name:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Email:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Password:</label>
            <FormControl type="password" className="py-2 mb-3" />
            <label className="fs-6">Father's Name:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Date of Birth:</label>
            <FormControl type="date" className="py-2 mb-3" />
            <label className="fs-6">Phone number:</label>
            <FormControl type="number" className="py-2 mb-3" />
            <label className="fs-6">Alternate Phone number:</label>
            <FormControl type="number" className="py-2 mb-3" />
            <label className="fs-6">Gender:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Gender</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Maritial status:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Maritial status:</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Nationality:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Nationality:</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">National-id:</label>
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

            <label className="fs-6">Career-level:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Career-level</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

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
            <label className="fs-6">Functional Area:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Functional Area</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Current-Salary:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Expected-Salary:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Salary-currency:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Salary-currency</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Street-Address:</label>
            <FormControl type="text" className="py-2 mb-3" />

            <label className="fs-6">Is-Active:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <label className="fs-6">Immediate Avaiable?:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <label className="fs-6">Is-Verified:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <Button className="Btn_color py-2 mt-2" type="sumbit">
              Create New job
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addusers;
