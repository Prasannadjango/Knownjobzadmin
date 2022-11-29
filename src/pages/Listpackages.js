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
const ListPackages = () => {
  const navigate = useNavigate();
  const navigateTopackages = () => {
    navigate("/Addpackages");
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
              <FaIcons.FaInbox   className="fs-3 me-3" />
              <h4>All packages</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateTopackages}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New Packages
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
                  placeholder="Search for Packages ..."
                />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="col-2">
                  <FormControl
                  type="text"
                  placeholder="Package-title"
                />
                  </th>
                  <th className="col-2">
                  <FormControl
                  type="text"
                  placeholder="Package-Price"
                />
                  </th>
                
                <th >  <FormControl
                  type="text"
                  placeholder="Package-num days"
                /></th>
                   <th>  <FormControl
                  type="text"
                  placeholder="Package-num Listings"
                /></th>
                <th>
                <Form.Select aria-label="Default select example">
                <option>Package for?</option>
                <option value="10">show 10 Records</option>
                <option value="25">Show 25 Records</option>
                <option value="50">Show 50 Records</option>
              </Form.Select>
                </th>
                <th></th>
                </tr>
                <tr>
                  <th>Title</th>

                 
                    <th>Price</th>
                  <th>No of Days</th>
                  <th>No of listings</th>
                  <th>For</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 days pack</td>
                  <td>30</td>
                   <td>2</td>
                   <td>1</td>
                   <td>ad</td>
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

export default ListPackages;
