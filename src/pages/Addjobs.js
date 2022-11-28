import React from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Form, FormControl, Button } from "react-bootstrap";
function Addjobs() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <h4>Add New jobs</h4>
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
            <label className="fs-6">Job title:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Job Skills:</label>
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
            <label className="fs-6">Is-Freelance:</label>
            <div className="d-flex">
              <Form.Check
                className="py-2 mb-3 me-3"
                type="checkbox"
                label="Yes"
              />
              <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
            </div>
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

            <label className="fs-6">Salary-from:</label>
            <FormControl type="text" className="py-2 mb-3" />
            <label className="fs-6">Salary-to:</label>
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
            <label className="fs-6">No of Positions:</label>
            <FormControl type="text" className="py-2 mb-3" />
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
            <label className="fs-6">Job Expiry-date:</label>
            <FormControl type="date" className="py-2 mb-3" />
            <label className="fs-6">Required Degree-level:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Required-level</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label className="fs-6">Required Job-Experience:</label>
            <Form.Select
              aria-label="Default select example"
              className="py-2 mb-3"
            >
              <option>Select the Job-Experience</option>
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
            <Button className="Btn_color py-2 mt-2" type='sumbit'>Create New job</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Addjobs;
