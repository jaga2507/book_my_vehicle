import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import { updateBills, sortBills, filterBillsEq } from "../../Redux/userAction";
import { Link } from "react-router-dom";

class ViewAllBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: true,
      category: "all",
    };
  }

  componentDidMount() {
    this.props.updateBills();
  }

  handleSort = (...e) => {
    const [fieldName, isNumber] = e;
    let { isSorted } = this.state;
    let { sortBills } = this.props;
    if (isSorted) {
      sortBills(fieldName, "DECENDING", isNumber);
    } else {
      sortBills(fieldName, "ASCENDING", isNumber);
    }
    this.setState({
      isSorted: !this.state.isSorted,
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    let { updateBills, filterBills } = this.props;
    if (value === "all") {
      updateBills();
    } else {
      updateBills();
      filterBills(name, value);
    }
    this.setState({
      [name]: value,
    });
  };

  render() {
    let { Bills, Users } = this.props;
    return (
      <React.Fragment>
        <h1>All Booking Details</h1>
        <Select
          onChange={this.handleChange}
          name="category"
          variant="outlined"
          value={this.state.category}
          style={{ padding: "5px", width: "200px", marginBottom: "20px" }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"car"}>Car</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
        </Select>
        <h6 style={{ color: "red" }}>Click on table header to sort the table</h6>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ cursor: "pointer" }}>
                <TableCell
                  onClick={() => this.handleSort("billId", true)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Bill ID
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("billAmount", true)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Bill Amount
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("category", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Vehicle Category
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("vehicle_no", true)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Vehicle Number
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("startDate", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Start date
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("endDate", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  End date
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("bookedDate", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Booked date
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("origin", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Origin
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("destination", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Destination
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("paymentMethod", false)}
                  style={{ border: "1px solid red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Payment Mode
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(Bills).map((key) => {
                let row = Bills[key],
                  UserId = "";
                Object.keys(Users).map((key) => {
                  let hasBill = false,
                    user = Users[key];
                  user.history.forEach((bill) => {
                    if (row.billId === bill.billId) {
                      hasBill = true;
                    }
                  });
                  if (hasBill) {
                    UserId = user.userId;
                  }
                });
                return (
                  <TableRow key={row.billId}>
                    <TableCell component="th" scope="row">
                      <Link to={`allUsers/${UserId}`}>{row.billId}</Link>
                    </TableCell>
                    <TableCell>{row.billAmount}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.vehicle_no}</TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                    <TableCell>{row.bookedDate}</TableCell>
                    <TableCell>{row.origin}</TableCell>
                    <TableCell>{row.destination}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Bills: state.user.AllBills,
  Users: state.user.user_datas,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateBills: () => dispatch(updateBills()),
    sortBills: (fieldName, sortType, isNumber) =>
      dispatch(sortBills(fieldName, sortType, isNumber)),
    filterBills: (category, value) => dispatch(filterBillsEq(category, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllBookings);
