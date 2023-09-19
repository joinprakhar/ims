import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import { useState } from "react";
import { SelectBox } from "../Tools/SelectBox";
import { FaTrash } from "react-icons/fa";
import jitendra from "../assets/jitendra.png";

const Admission = () => {
  const [detail, setDetails] = useState({
    date: getCurrentDate(),
    employeeId: "",
    name: "",
    mobile: "",
    address: "",
    course: "",
    photo: "",
    qual: "",
  });

  console.log(detail);
  const title = ["Mr.", "Miss.", "Mrs."];
  const gender = ["Male", "Female", "Other"];
  const center = ["Gopiganj", "Gyanpur", "Jangiganj"];
  const degree = [
    "School",
    "HighSchool(10th)",
    "Graduation(12th)",
    "Graduation",
    "Post Graduation",
    "Other",
  ];
  const [list, setList] = useState([
    {
      duration: "6 months",
      name: "DCA",
      fee: 5500,
    },
    {
      duration: "12 months",
      name: "PGDCA",
      fee: 7500,
    },
  ]);

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails({
      ...detail,
      [name]: value,
    });
  };

  return (
    <>
      <Row mx={2}>
        <Col md={3} className="md-mx-2">
          <h1 className="text-primary">Admission</h1>
        </Col>
        <Col md={9} className="md-mx-2">
          <Row className="mt-3">
            <Col md={3}>
              <label className="col-md-4">Date :</label>
              <input
                className="col-md-8"
                name="date"
                type="date"
                value={detail.date}
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <label className="col-md-6">Emp id :</label>
              <input
                className="col-md-6"
                name="employeeId"
                type="text"
                value={detail.employeeId}
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <label className="col-md-6">Reg no :</label>
              <input
                className="col-md-6"
                name="registraitonNo"
                type="text"
                value={detail.registraitonNo}
                onChange={handleChange}
              />
            </Col>

            <Col md={3}>
              <label className="col-md-4">Center :</label>
              <select
                style={{ height: "30px" }}
                className="col-md-7"
                name="qual"
                value={detail.qual}
                onChange={handleChange}
              >
                {center &&
                  center.map((ele, index) => (
                    <option key={index} value={ele}>
                      {ele}
                    </option>
                  ))}
              </select>
            </Col>
          </Row>
        </Col>
        <Row mx={2}>
          <Col md={10}>
            <Row>
              <Col md={4}>
                <label className="col-md-2">Name</label>
                <select
                  style={{ height: "30px" }}
                  className="col-md-3"
                  name="Title"
                  value={detail.surname}
                  onChange={handleChange}
                >
                  {title &&
                    title.map((ele, index) => <option value="">{ele}</option>)}
                </select>
                <input
                  className="col-md-7"
                  name="name"
                  type="text"
                  value={detail.name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="col-md-4">Mobile :</label>
                <input
                  className="col-md-8"
                  name="mobile"
                  type="number"
                  value={detail.mobile}
                  onChange={handleChange}
                />
              </Col>
              <Col md={5}>
                <label className="col-md-2">Image</label>
                <input
                  className="col-md-7"
                  name="dob"
                  type="file"
                  onChange={handleChange}
                />
                <button className="col-md-3">Upload</button>
              </Col>
            </Row>
            <Row className="my-2">
              <Col md={4}>
                <label className="col-md-5">Father's Name:</label>
                <input
                  className="col-md-7"
                  name="fatherName"
                  type="text"
                  value={detail.fatherName}
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="col-md-3">Address:</label>
                <input
                  className="col-md-9"
                  name="address"
                  type="text"
                  value={detail.address}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="col-md-4">Gender:</label>
                <select
                  style={{ height: "30px" }}
                  className="col-md-8"
                  name="gender"
                  value={detail.gender}
                  onChange={handleChange}
                >
                  {gender &&
                    gender.map((ele, index) => <option value="">{ele}</option>)}
                </select>
              </Col>
            </Row>
            <Row className="my-2">
              <Col md={4}>
                <label className="col-md-5">Qualification :</label>
                <select
                  style={{ height: "30px" }}
                  className="col-md-7"
                  name="qual"
                  value={detail.qual}
                  onChange={handleChange}
                >
                  <option value="">Select a degree</option>{" "}
                  {degree &&
                    degree.map((ele, index) => (
                      <option key={index} value={ele}>
                        {ele}
                      </option>
                    ))}
                </select>
              </Col>
              <Col md={4}>
                <label className="col-md-3">Birthday:</label>
                <input
                  className="col-md-9"
                  name="dob"
                  type="date"
                  value={detail.dob}
                  onChange={handleChange}
                />
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md={2}>
            <img
              src={jitendra}
              alt=""
              style={{ width: "150px", border: "1px solid" }}
            />
          </Col>
        </Row>
      </Row>
      <hr />
      <Row>
        <Col md={8}>
          <h6>Courses</h6>
          <section className="col mt-2">
            <Card className="shsadow table-responsive">
              <Table className="align-items-center ">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>S.no</th>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Fees</th>
                    <th>Fasttrack</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {list &&
                    list.map((ele, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.duration}</td>
                        <td>{ele.fee}</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <span>
                            <FaTrash />
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card>
          </section>
        </Col>
        <Col md={4}>
          <h6>Payment</h6>
          <hr />
          <Row>
            <Col md={6}>Admission Fees</Col>
            <Col md={6}>700 Rs</Col>
          </Row>
          <Row>
            <Col md={6}>Course Fees</Col>
            <Col md={6}>13000 Rs</Col>
          </Row>
          <Row>
            <Col md={6}>Payment type</Col>
            <Col md={6}>
              <select
                className="col-md-6"
                type="text"
                style={{ height: "30px" }}
              >
                <option value="ss">Monthly</option>
                <option value="ss">Onetime</option>
              </select>
              <span className="col-md-1"> &nbsp;</span>
              <input type="number" className="col-md-5" placeholder="Months" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>Payment Mode</Col>
            <Col md={6}>
              <select
                className="col-md-7"
                type="text"
                style={{ height: "30px" }}
              >
                <option value="ss">Cash</option>
                <option value="ss">Online</option>
              </select>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={2}>Total</Col>
            <Col md={7}>700 + 1084 x 12 =1784 Rs</Col>
            <Col md={3}>
              <button
                className="btn-danger"
                style={{
                  background: "red",
                  border: "none",
                  color: "white",
                  margin: "5px",
                  padding: "0 15px",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Admission;
