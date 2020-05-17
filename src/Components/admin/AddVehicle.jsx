import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addVehicle } from "../../Redux/rentAction";
import { connect } from "react-redux";
import { TextField, Select, MenuItem } from "@material-ui/core";

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_name: "",
      company: "",
      category: "bike",
      cost: {
        per_day: "",
        after_5: "",
        after_10: "",
      },
      location: "",
      vehicle_no: "",
      available: true,
      img_url: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = () => {
    this.props.addVehicle(this.state);
    alert("Vehicle Added");
    this.reseting();
  };

  reseting = () => {
    this.setState({
      modal_name: "",
      company: "",
      category: "bike",
      cost: {
        per_day: "",
        after_5: "",
        after_10: "",
      },
      location: "",
      vehicle_no: "",
      available: true,
      img_url: "",
    });
  };

  costDataUpdate = (event) => {
    this.setState({
      cost: {
        ...this.state.cost,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const {
      company,
      category,
      location,
      cost,
      modal_name,
      available,
      vehicle_no,
      img_url,
    } = this.state;
    return (
      <div>
        <form>
          <h2>Add New Vehicle</h2>
          <TextField
            onChange={this.handleChange}
            name="img_url"
            label="Vehicle image URL"
            variant="filled"
            value={img_url}
          />
          <br />
          <br />
          <TextField
            onChange={this.handleChange}
            name="modal_name"
            label="Model Name"
            variant="filled"
            value={modal_name}
          />
          <br />
          <br />
          <TextField
            onChange={this.handleChange}
            name="company"
            label="Company"
            variant="filled"
            value={company}
          />
          <br />
          <br />
          <h3>Availability :</h3>
          <Select
            onChange={this.handleChange}
            name="available"
            variant="filled"
            value={available}
          >
            <MenuItem value={true}>Available</MenuItem>
            <MenuItem value={false}>Not Available</MenuItem>
          </Select>
          <h3>Vehicle type</h3>
          <Select
            onChange={this.handleChange}
            name="category"
            variant="filled"
            value={category}
          >
            <MenuItem value={"bike"}>Bike</MenuItem>
            <MenuItem value={"car"}>Car</MenuItem>
          </Select>
          <h3>Cost :</h3>
          <TextField
            onChange={this.costDataUpdate}
            name="per_day"
            label="Cost per Day"
            variant="filled"
            type="Number"
            value={cost.per_day}
          />
          <br />
          <br />
          <TextField
            onChange={this.costDataUpdate}
            name="after_5"
            label="Cost after 5-days"
            variant="filled"
            type="Number"
            value={cost.after_5}
          />
          <br />
          <br />
          <TextField
            onChange={this.costDataUpdate}
            name="after_10"
            label="Cost after 10-days"
            variant="filled"
            type="Number"
            value={cost.after_10}
          />
          <br />
          <br />
          <TextField
            onChange={this.handleChange}
            name="location"
            label="location"
            variant="filled"
            value={location}
          />
          <br />
          <br />
          <TextField
            onChange={this.handleChange}
            name="vehicle_no"
            label="Vehicle Number"
            variant="filled"
            value={vehicle_no}
          />
          <br />
          <br />
          <button onClick={this.submit} className="btn btn-dark">
            Add Vehicle
          </button>
          <br />
          <br />
          <Link to="/admin/allVehicles">
            <button className="btn btn-primary">
              View All Vehicles
            </button>
          </Link>
          <br />
          <br />
          <Link to="/admin">
            <button className="btn btn-success">Home Page</button>
          </Link>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.rent.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addVehicle: (vehicle) => dispatch(addVehicle(vehicle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
