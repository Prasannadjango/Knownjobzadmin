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
const Listjobexperience = () => {
  const navigate = useNavigate();
  const navigateTojobexperience = () => {
    navigate("/Addjobexperience");
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit State
    </Tooltip>
  );
  const DeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete State
    </Tooltip>
  );

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
            <div className="d-flex">
              <FaIcons.FaUserTie  className="fs-3 me-3" />
              <h4>All Job-Experience</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateTojobexperience}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New Job-Experience
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
                  placeholder="Search for Job-Experience ..."
                />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>Language?</option>
                      <option value="10">show 10 Records</option>
                      <option value="25">Show 25 Records</option>
                      <option value="50">Show 50 Records</option>
                    </Form.Select>
                  </th>
                 

                  <th >
                  <FormControl type="text" placeholder="Job-Experience" />
                  </th>
                  <th className="col-2">
                    <Form.Select aria-label="Default select example">
                      <option>Is-Active?</option>
                      <option value="10">show 10 Records</option>
                      <option value="25">Show 25 Records</option>
                      <option value="50">Show 50 Records</option>
                    </Form.Select>
                  </th>
                </tr>
                <tr>
                  <th>Language</th>

                  <th>Job-Experience</th>
                 
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>en</td>
                  <td>Fresher</td>
                   
                  <td>
                    <div className="d-flex justify-content-center">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={renderTooltip}
                      >
                        <Button className="Btn_color Action_btn me-2">
                          <FaIcons.FaPencilAlt className="text-white fs-6" />
                        </Button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={DeleteTooltip}
                      >
                        <Button className="bg-danger Action_btn me-2">
                          <FaIcons.FaTrashAlt className="text-white fs-6" />
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </td>
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

export default  Listjobexperience;
