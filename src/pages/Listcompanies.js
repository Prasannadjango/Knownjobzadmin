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
const Listcompanies = () => {
  const navigate = useNavigate();
  const navigateToAdduser = () => {
    navigate("/Adduser");
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Companies
    </Tooltip>
  );
  const DeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Companies
    </Tooltip>
  );
  const FeatureTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Make it as Featured Company
    </Tooltip>
  );
  const ListTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     List Jobs of the Company
    </Tooltip>
  );
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
            <div className="d-flex">
              <FaIcons.FaRegAddressCard className="fs-3 me-3" />
              <h4>All Companies</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateToAdduser}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New Companies
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
                  placeholder="Search for Companies..."
                />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <FormControl type="text" placeholder="Company-Name" />
                  </th>
                  <th>
                    <FormControl type="text" placeholder="Company-Email" />
                  </th>
                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>Is-Active?</option>
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </th>

                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>Is-Featured?</option>
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </th>
                </tr>
                <tr>
                  <th>Name</th>

                  <th>Email</th>
                  <th>Is-Active?</th>
                  <th>Is-featured?</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>user</td>
                  <td>Sample1@gmail.com</td>
                  <td>yes</td>
                  <td>no</td>

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
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={ListTooltip            
                        }
                      >
                        <Button className="bg-secondary Action_btn me-2">
                          <FaIcons.FaRegListAlt className="text-white fs-6" />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 200, hide: 300 }}
                        overlay={FeatureTooltip}
                      >
                        <Button className="bg-success Action_btn me-2">
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

export default Listcompanies;
