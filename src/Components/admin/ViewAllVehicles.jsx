import React from "react";
import { connect } from "react-redux";
import ViewTable from "./ViewTable";
import { Select, MenuItem } from "@material-ui/core";
import { filterVehicleEq, sortVehicles } from "../../Redux/rentAction";

class ViewAllVehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
      lesserThan: "all",
      greaterThan: "all",
      available: "all",
      isSorted: true,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.props.filterDataEQ(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSort = (...e) => {
    const [fieldName, isNumber] = e;
    let { isSorted } = this.state;
    let { sortCost } = this.props;
    if (isSorted) {
      sortCost(fieldName, "DECENDING", isNumber);
    } else {
      sortCost(fieldName, "ASCENDING", isNumber);
    }
    this.setState({
      isSorted: !this.state.isSorted,
    });
  };

  render() {
    const { category, available } = this.state;
    return (
      <React.Fragment>
        <h1>All Vehicles</h1>
        <Select
          onChange={this.handleChange}
          name="available"
          variant="outlined"
          value={available}
          style={{ padding: "5px", marginRight: "20px", marginBottom: "20px", width: "200px" }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={false}>Not Available</MenuItem>
          <MenuItem value={true}>Available</MenuItem>
        </Select>
        <Select
          onChange={this.handleChange}
          name="category"
          variant="outlined"
          value={category}
          style={{ padding: "5px", width: "200px" }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"car"}>Car</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
        </Select>
        <h6 style={{ color: "red" }}>Click on table header to sort the table</h6>
        <ViewTable handleSort={this.handleSort} {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.rent.filteredData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    filterDataEQ: (category, value) =>
      dispatch(filterVehicleEq(category, value)),
    sortCost: (category, sortType, isNumber) =>
      dispatch(sortVehicles(category, sortType, isNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVehicles);
