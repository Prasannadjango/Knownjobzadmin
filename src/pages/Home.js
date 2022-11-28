import React from "react";
import {
  Col,
  Row,
  Nav,
  Tab,
  Dropdown,
  Card,
  Button,
  Form,
  Table,
  Modal,
  FormControl,
} from "react-bootstrap";
import { FaUserCheck, FaUserTie, FaUserTag, FaBriefcase } from "react-icons/fa";
import Cardbg from "../Assests/Images/cardbg.svg";
const Home = () => {
  return (
    <>
      <div>
        <div className="px-3 pt-3">
          <Row xs={1} xl={3} className="gx-2">
            <Col>
              <Card className="Dashboard_card ">
                <Card.Body>
                  <img src={Cardbg} />
                  <div className="text-white d-flex justify-content-between">
                    <div className="text-start">
                      <h4>Today Users</h4>
                      <h1 className="fw-bold">10</h1>
                    </div>
                    <span>
                      <FaUserTie className="fs-2" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Dashboard_card2">
                <Card.Body>
                  <img src={Cardbg} />
                  <div className="text-white d-flex justify-content-between">
                    <div className="text-start">
                      <h4>Active Users</h4>
                      <h1 className="fw-bold">10</h1>
                    </div>
                    <span>
                      <FaUserTag className="fs-2" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Dashboard_card3">
                <Card.Body>
                  <img src={Cardbg} />
                  <div className="text-white d-flex justify-content-between">
                    <div className="text-start">
                      <h4>Verified Users</h4>
                      <h1 className="fw-bold">50</h1>
                    </div>
                    <span>
                      <FaUserCheck className="fs-2" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card className="Dashboard_card4">
                <Card.Body>
                  <img src={Cardbg} />
                  <div className="text-white d-flex justify-content-between">
                    <div className="text-start">
                      <h4>Today jobs</h4>
                      <h1 className="fw-bold">50</h1>
                    </div>
                    <span>
                      <FaBriefcase className="fs-2" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card className="Dashboard_card5">
                <Card.Body>
                  <img src={Cardbg} />
                  <div className="text-white d-flex justify-content-between">
                    <div className="text-start">
                      <h4>Active jobs</h4>
                      <h1 className="fw-bold">50</h1>
                    </div>
                    <span>
                      <FaBriefcase className="fs-2" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card className="Dashboard_card6">
                <Card.Body>
                  <img src={Cardbg} />
                  <div className="text-white d-flex justify-content-between">
                    <div className="text-start">
                      <h4>Featured jobs</h4>
                      <h1 className="fw-bold">20</h1>
                    </div>
                    <span>
                      <FaBriefcase className="fs-2" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
