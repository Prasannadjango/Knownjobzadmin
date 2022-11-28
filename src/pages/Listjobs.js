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
const Listjob = () => {
  const navigate = useNavigate();
  const navigateToAddjobs = () => {
    navigate("/Addjobs");
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Jobs
    </Tooltip>
  );
  const DeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Jobs
    </Tooltip>
  );
  const FeatureTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Make it as Featured Job
    </Tooltip>
  );
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
            <div className="d-flex">
              <FaIcons.FaBriefcase className="fs-3 me-3" />
              <h4>All Jobs</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateToAddjobs}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New Jobs
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
                <FormControl type="text" placeholder="Search for Jobs..." />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>Select Company</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </th>
                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>Select Job title</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </th>
                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>Select Job Description</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </th>
                  <th>
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-2"
                    >
                      <option>Country</option>
                      <option value="1">Active</option>
                      <option value="2">In-Active</option>
                    </Form.Select>
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-2"
                    >
                      <option>State</option>
                      <option value="1">Active</option>
                      <option value="2">In-Active</option>
                    </Form.Select>
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-2"
                    >
                      <option>City</option>
                      <option value="1">Active</option>
                      <option value="2">In-Active</option>
                    </Form.Select>
                  </th>
                  <th>
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-2"
                    >
                      <option>Active</option>
                      <option value="1">Active</option>
                      <option value="2">In-Active</option>
                    </Form.Select>
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-2"
                    >
                      <option>Is Feature</option>
                      <option value="1">Active</option>
                      <option value="2">In-Active</option>
                    </Form.Select>
                  </th>
                </tr>
                <tr>
                  <th>Company</th>
                  <th>Job-title</th>
                  <th>job Description</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABY Info</td>
                  <td>Sample1</td>
                  <td>asdasd</td>
                  <td>India(tamilnadu-Chennai)</td>
                  <td >
                    <div className="d-flex justify-content-center">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={renderTooltip}
                      >
                        <Button className="Btn_color Action_btn me-3">
                          <FaIcons.FaPencilAlt className="text-white fs-6" />
                        </Button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={DeleteTooltip}
                      >
                        <Button className="bg-danger Action_btn me-3">
                          <FaIcons.FaTrashAlt className="text-white fs-6" />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={FeatureTooltip}
                      >
                        <Button className="bg-success Action_btn me-3">
                          <FaIcons.FaCrown className="text-white fs-6" />
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

export default Listjob;
