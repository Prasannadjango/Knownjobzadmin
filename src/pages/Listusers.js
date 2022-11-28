import React from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import {
  Form,
  Table,
  FormControl,
  Pagination,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
const Listusers = () => {
  const navigate = useNavigate();
  const navigateToAdduser = () => {
    navigate("/Adduser");
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit User
    </Tooltip>
  );
  const DeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete User
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
              <BaIcons.BsFillFilePersonFill className="fs-3 me-3" />
              <h4>All User-profiles</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateToAdduser}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New User-profiles
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
                <FormControl type="text" placeholder="Search for User-profile..." />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                     <FormControl type='Number'/>
                  </th>
                  <th>
                  <FormControl type='text'/>
                  </th>
                  <th>
                  <FormControl type='text'/>
                  </th>
                  
                  <th>
                    
                  </th>
                </tr>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>user</td>
                  <td>Sample1@gmail.com</td>
                 
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

export default Listusers;
