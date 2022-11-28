import React from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {
  Form,
  Table,
  Modal,
  FormControl,
  Pagination,
  Button,
} from "react-bootstrap";
const Listad = () => {
  const navigate = useNavigate();
  const navigateToAddads = () => {
    navigate("/Addads");
  };
  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
            <div className="d-flex">
              <FaIcons.FaAdversal className="fs-3 me-3" />
              <h4>All Ads</h4>
            </div>
            <Button
              className="Btn_color d-flex align-content-center py-2"
              onClick={navigateToAddads}
            >
              <FaIcons.FaFolderPlus className="fs-5 me-3 " />
              Add New Ads
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
                <FormControl type="text" placeholder="Search for Ads..." />
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
                      <option>Select Ad title</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </th>
                  <th></th>
                  <th>
                    <Form.Select aria-label="Default select example">
                      <option>is-Active</option>
                      <option value="1">Active</option>
                      <option value="2">In-Active</option>
                    </Form.Select>
                  </th>
                </tr>
                <tr>
                  <th>Company</th>
                  <th>Ad-title</th>
                  <th>Ad Expiry date</th>
                  <th>is-Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABY Info</td>
                  <td>Sample1</td>
                  <td>21.12.22</td>
                  <td>yes</td>
                  <td className="col-2  ">
                    <div className="d-flex justify-content-center">
                      <Button className="Btn_color Action_btn me-3">
                        <FaIcons.FaPencilAlt className="text-white fs-6" />
                      </Button>
                      <Button className="bg-danger Action_btn me-3">
                        <FaIcons.FaTrashAlt className="text-white fs-6" />
                      </Button>
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

export default Listad;
