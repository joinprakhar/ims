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
import Paginate from "../components/Paginate";
import { useState } from "react";
import ExportFile from "../components/DownloadExcel";

const Inquery = () => {
  const [list, setList] = useState([
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
    {
      Date: "20/12/2015",
      Name: "Prakhar Pandey",
      Mobile: 9876543210,
      Address: "Gopiganj",
      Course: "MCA",
      Remark: "Want to take admission in next month",
    },
  ]);

  return (
    <>
      <Row mx={2}>
        <Col md={3} className="md-mx-2">
          <h1 className="text-primary">Inquery</h1>
          <Row className="mt-3">
            <h3 className="col-md-12" htmlFor="inputEmail3">
              New Inquery
            </h3>
          </Row>
          <Row className="mt-3">
            <label className="col-md-3">Name:</label>
            <input className="col-md-9" type="text" />
          </Row>
          <Row className="mt-3">
            <label className="col-md-3">Mobile:</label>
            <input className="col-md-9" type="number" max="10" />
          </Row>
          <Row className="mt-3">
            <label className="col-md-3">Date:</label>
            <input className="col-md-9" type="date" />
          </Row>
          <Row className="mt-3">
            <label className="col-md-3">Address:</label>
            <input className="col-md-9" type="text" />
          </Row>
          <Row className="mt-3">
            <label className="col-md-3">Course:</label>
            <select className="col-md-9" type="text">
              <option value="ss">MCA</option>
              <option value="ss">BCA</option>
            </select>
          </Row>
          <Row className="mt-3">
            <label className="col-md-3">Remark:</label>
            <textarea className="col-md-9" type="text" rows={5} />
          </Row>
          <Row className="mt-3">
            <Button className="btn-danger">Save</Button>
          </Row>
        </Col>
        <Col md={9}>
          <Row>
            <h3>Inquires</h3>
          </Row>
          <hr />
          <Row className="mt-3">
            <label className="col-md-2">From Date :</label>
            <input className="col-md-2" type="date" />
            <label className="col-md-2">To Date :</label>
            <input className="col-md-2" type="date" />
            <button className="col-md-1 mx-2">Search</button>
            <Col className="col-md-1">
              <ExportFile dataExcel={list} />
            </Col>
          </Row>
          <hr />
          <Row>
            <section className="col mt-2">
              <Card
                className="shsadow table-responsive"
                style={{ height: "350px" }}
              >
                <Table className="align-items-center ">
                  <thead className="thead-dark">
                    <tr className="table-dark">
                      <th>Date</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Course</th>
                      <th>Address</th>
                      <th>Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list &&
                      list.map((ele, index) => (
                        <tr>
                          <td>{ele.Date}</td>
                          <td>{ele.Name}</td>
                          <td>{ele.Mobile}</td>
                          <td>{ele.Course}</td>
                          <td>{ele.Address}</td>
                          <td>{ele.Remark}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card>
            </section>
          </Row>
          <Row className="m-2">
            <Paginate className="m-2" pages={"20"} page={"25"} isAdmin={true} />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Inquery;
