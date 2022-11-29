import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
function AddLanguage() {

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New Language</h4>
          <Form className="Adminuser_form col-8 py-4">
            
            <label className="fs-6">Language:</label>
            <FormControl type="text" className="py-2 mb-3" />

            <label className="fs-6">Native:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">ISO Code:</label>
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
            <label className="fs-6">Is RTL:</label>
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
            <Button className="Btn_color py-2 mt-2" type='sumbit'>Add New Language</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default AddLanguage;
