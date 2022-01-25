import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [data, setData] = useState({
    npsn: '',
    name: '',
    address: '',
    street: '',
    city: '',
    province: '',
    zip_code: '',
    status: '',
  })

  const { npsn, name, address, street, city, province, zip_code, status } = data

  const hancleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: "rotline.test/api/schools",
      headers: {
        "Content-Type": "application/json"
      },
      data
    })
  }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="form.npsn">
        <Form.Label>NPSN</Form.Label>
        <Form.Control type="number" name="npsn" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.address">
        <Form.Label>Address 1</Form.Label>
        <Form.Control type="text" name="address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.address">
        <Form.Label>Address 2</Form.Label>
        <Form.Control type="text" name="street" />
      </Form.Group>
      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="form.province">
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" name="province" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="form.city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="form.zip">
            <Form.Label>ZIP CODE</Form.Label>
            <Form.Control type="number" name="zip_code" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="form.status">
        <Form.Label>Status</Form.Label>
        <Form.Select name="status">
          <option>NEGERI</option>
          <option>SWASTA</option>
        </Form.Select>
      </Form.Group>

      <Button className="btn btn-success">Submit</Button>

    </Form>
  )
}
export default Insert;