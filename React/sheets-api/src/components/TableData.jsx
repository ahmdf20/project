import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const TableData = () => {

  const [APIdata, setAPIdata] = useState([])

  useEffect(async () => {
    try {
      await axios.get("https://v1.nocodeapi.com/dayum/google_sheets/RgIicVrMICXOSFmn?tabId=Sheet1")
        .then((result) => {
          let data = JSON.stringify(result.data.data)
          setAPIdata(JSON.parse(data))
          // console.log(data)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Table responsive style={{ marginTop: "3rem" }} className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>QTY</th>
        </tr>
      </thead>
      <tbody>
        {APIdata.map((item, id) => {
          return (
            <tr key={id}>
              <td>{item.Name}</td>
              <td>{item.Price}</td>
              <td>{item.qty}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
export default TableData;