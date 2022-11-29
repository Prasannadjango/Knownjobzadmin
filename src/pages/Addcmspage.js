import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
function Addcmspage() {

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New C.M.S Page</h4>
          <Form className="Adminuser_form col-8 py-4">
            
            <label className="fs-6">Page slug:</label>
            <FormControl type="text" className="py-2 mb-3" />
          
            <label className="fs-6">Show in Top-menu:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <label className="fs-6">Show in Footer menu:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
            <label className="fs-6">SEO Title:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">SEO Description:</label>
            <FormControl type="text" className="py-2 mb-3" as="textarea" rows={3}/>
            <label className="fs-6">SEO Keywords:</label>
            <FormControl type="text" className="py-2 mb-3" as="textarea" rows={3}/>
            <label className="fs-6" >Other SEO Tags:</label>
            <FormControl type="text" className="py-2 mb-3" as="textarea" rows={3}/>
            <Button className="Btn_color py-2 mt-2" type='sumbit'>Create New C.M.S Page</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addcmspage;
