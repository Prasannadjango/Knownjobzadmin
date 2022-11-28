import React from "react";
import {useNavigate} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import {
  Form,
  Table,
  Modal,
  FormControl,
  Pagination,
  Button,
} from "react-bootstrap";

const Listadduser = () => {
  const navigate = useNavigate();
const navigateToAddusers = () => {
 navigate('/Addadminusers');
};
  return (
      
    <>
      <div className="Tabs_container">
        <div className="Tabs_content text-start p-4">
          <div className="d-flex justify-content-between pb-3">
           <div className="d-flex">
            <FaIcons.FaUserCheck className="fs-3 me-3"/>
           <h4>All Admin Users</h4>
           </div>
          <Button className='Btn_color d-flex align-content-center py-2' onClick={navigateToAddusers}>
            <FaIcons.FaFolderPlus className="fs-5 me-3 "/>Add New Admin Users</Button>
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
                  placeholder="Search for Admin User..."
                />
              </Form>
            </div>
          </div>
          <div className="Tabs_data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Super@admin.com</td>
                  <td>Super admin</td>
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
            <div className='d-flex justify-content-end'>
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

export default Listadduser;
