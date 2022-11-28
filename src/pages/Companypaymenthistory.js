import React from "react";

import * as FaIcons from "react-icons/fa";

import {
  Form,
  Table,
  FormControl,
  Pagination,

} from "react-bootstrap";
const Companypaymenthistory = () => {

  return (
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
            <div className="d-flex">
              <FaIcons.FaRegAddressCard className="fs-3 me-3" />
              <h4>All Companies Payment History</h4>
            </div>
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
                  placeholder="Search for Payment history..."
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
                    <Form.Select aria-label="Default select example">
                      <option>Package Name</option>
                      <option value="10">show 10 Records</option>
                      <option value="25">Show 25 Records</option>
                      <option value="50">Show 50 Records</option>
                    </Form.Select>
                  </th>
                </tr>
                <tr>
                  <th>Name</th>

                  <th>Package Name</th>
                  <th>Payment method</th>
                  <th>Package start-date</th>
                  <th>Package End-date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>user</td>
                  <td>Gold</td>
                  <td>Online</td>
                  <td>12.2.22</td>
                  <td>12.2.23</td>
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

export default Companypaymenthistory;
