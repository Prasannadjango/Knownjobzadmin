import React from "react";

import {
  Form,
 
  FormControl,

  Button,
} from "react-bootstrap";
const Addtranslatedpages = () => {
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New Translated Page</h4>
          <Form className="Adminuser_form col-8 py-4">
        
            <label className="fs-6">Language:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Language:</option>
              <option value="1">Eng</option>
              <option value="2">Chinese</option>
            
            </Form.Select>
            <label className="fs-6">CMS page:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select CMS page:</option>
              <option value="1">Eng</option>
              <option value="2">Chinese</option>
            
            </Form.Select>
            <label className="fs-6">Page Title:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Page content:</label>
            <FormControl type="text" className="py-2 mb-3" as="textarea" rows={5} />
            <Button className='Btn_color py-2 mt-2'>Add new Translated Page</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Addtranslatedpages;
