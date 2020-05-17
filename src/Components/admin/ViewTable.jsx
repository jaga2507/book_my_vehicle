import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default (props) => {
  let { data, handleSort } = props;
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ cursor: "pointer" }}>
              <TableCell
                onClick={() => handleSort("id", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Vehicle ID
              </TableCell>
              <TableCell
                onClick={() => handleSort("modal_name", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Model Name
              </TableCell>
              <TableCell
                onClick={() => handleSort("company", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Company
              </TableCell>
              <TableCell
                onClick={() => handleSort("category", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Category
              </TableCell>
              <TableCell
                onClick={() => handleSort("available", "bool")}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Available
              </TableCell>
              <TableCell
                onClick={() => handleSort("location", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Location
              </TableCell>
              <TableCell
                onClick={() => handleSort("vehicle_no", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Vehicle Number
              </TableCell>
              <TableCell
                onClick={() => handleSort("cost.per_day", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Cost per day
              </TableCell>
              <TableCell
                onClick={() => handleSort("cost.after_5", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Cost after 5-days
              </TableCell>
              <TableCell
                onClick={() => handleSort("cost.after_10", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Cost after 10-days
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <Link to={`${props.match.url}/${row.id}`}>
                      {row.modal_name}
                    </Link>
                  </TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    {row.available ? "Available" : "Not Available"}
                  </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.vehicle_no}</TableCell>
                  <TableCell>{row.cost.per_day}</TableCell>
                  <TableCell>{row.cost.after_5}</TableCell>
                  <TableCell>{row.cost.after_10}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
