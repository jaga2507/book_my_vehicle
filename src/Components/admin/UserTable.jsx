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
  let { Users, handleSort } = props;
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ cursor: "pointer" }}>
              <TableCell
                onClick={() => handleSort("userId", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                User ID
              </TableCell>
              <TableCell
                onClick={() => handleSort("name", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Name
              </TableCell>
              <TableCell
                onClick={() => handleSort("age", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Age
              </TableCell>
              <TableCell
                onClick={() => handleSort("email", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Email ID
              </TableCell>
              <TableCell
                onClick={() => handleSort("mobile", true)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Phone Number
              </TableCell>
              <TableCell
                onClick={() => handleSort("password", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Password
              </TableCell>
              <TableCell
                onClick={() => handleSort("lisenceId", false)}
                style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
              >
                Lisence Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Users.map((row) => {
              // let row = Users[key];
              return (
                <TableRow key={row.userId}>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell>
                    <Link to={`${props.match.url}/${row.userId}`}>
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>{row.lisenceId}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
