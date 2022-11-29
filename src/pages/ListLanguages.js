import React from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import {
  Form,
  Table,
  FormControl,
  Pagination,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
const ListLanguage = () => {
  const navigate = useNavigate();
  const navigateToLanguage = () => {
    navigate("/AddLanguage");
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit cms pages
    </Tooltip>
  );
  const DeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete cms pages
    </Tooltip>
  );

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
            <div className="d-flex">
              <FaIcons.FaLanguage className="fs-3 me-3" />
              <h4>All Languages</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateToLanguage}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New Language
            </Button>
          </div>
          <div className="Tabs_header d-flex justify-content-between py-4">
            <div>
              <Form.Select aria-label="Default select example">
                <option>Choose records</option>
                <option value="10">show 10 Records</option>
                <option value="25">Show 25 Records</option>
                <option value="50">Show 50 Records</option>
              </Form.Select>
            </div>
            <div>
              <Form>
                <FormControl
                  type="text"
                  placeholder="Search for Languages ..."
                />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="col-2">
                    <FormControl type="text" placeholder="Language" />
                  </th>
                  <th className="col-2">
                    <FormControl type="text" placeholder="Native" />
                  </th>
                  <th className="col-2">
                    <FormControl type="text" placeholder="Iso code" />
                  </th>
                  <th className="col-2">
                    <Form.Select aria-label="Default select example">
                      <option>Is RTL?</option>
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </th>
                  <th className="col-2">
                    <Form.Select aria-label="Default select example" className='mb-2'>
                      <option>Is Default?</option>
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                   
                  </th>
                  <th>
                  <Form.Select aria-label="Default select example">
                      <option>Is Active?</option>
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <th>Languages</th>

                  <th>Native</th>

                  <th>Iso Code</th>
                  <th>Is RTL?</th>
                  <th>Is Default?</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>English</td>
                  <td>English</td>
                  <td>ENG</td>
                  <td>yes</td>
                  <td>no</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Pagination>
                <Pagination.First />

                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>

                <Pagination.Item>{20}</Pagination.Item>

                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListLanguage;
