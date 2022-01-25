import { Form, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Create = () => {
  const [APIdata, setAPIdata] = useState([])
  const [refresh, setRefresh] = useState([])
  const [data, setData] = useState({
    name: '',
    desc: '',
    price: '',
    qty: ''
  })

  const { name, desc, price, qty } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://v1.nocodeapi.com/dayummm/google_sheets/qRYpnXbHTaVALbBC?tabId=Sheet1',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify([
        [name, desc, price, qty],
      ])
    })
    location.relaod()
  }

  useEffect(() => {
    axios.get("https://v1.nocodeapi.com/dayummm/google_sheets/qRYpnXbHTaVALbBC?tabId=Sheet1")
      .then((result) => {
        let data = JSON.stringify(result.data.data)
        setAPIdata(JSON.parse(data))
        // console.log(data)
      })
  }, [])
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter the Name of Product" onChange={handleChange} autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" as="textarea" name="desc" placeholder="Enter Name of Description" style={{ height: "100px" }} onChange={handleChange} autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter the Price" name="price" onChange={handleChange} autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQYT">
          <Form.Label>QTY</Form.Label>
          <Form.Control type="number" name="qty" placeholder="Enter the QYT" onChange={handleChange} autoComplete="off" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      <Table responsive style={{ marginTop: "3rem" }} className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody>
          {APIdata.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>{item.qty}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
export default Create;