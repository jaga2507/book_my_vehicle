import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const VehicleSummary = (props) => {
  let { data, match } = props;
  let VehicleData = data.find((vehicle) => {
    return vehicle.id == match.params.id;
  });
  console.log("Vehicle summary props", props);
  return (
    <React.Fragment>
      <div>
        <div>
          <img src={VehicleData.img_url} alt="VehicleImg" />
        </div>
        <div>
          <h3>Vehicle ID :</h3>
          <p>{VehicleData.id}</p>
        </div>
        <div>
          <h3>Availability :</h3>
          <p>{VehicleData.available ? "Available" : "Not Available"}</p>
        </div>
        <div>
          <h3>Model Name :</h3>
          <p>{VehicleData.modal_name}</p>
        </div>
        <div>
          <h3>Company :</h3>
          <p>{VehicleData.company}</p>
        </div>
        <div>
          <h3>Category :</h3>
          <p>{VehicleData.category}</p>
        </div>
        <div>
          <h3>Vehicle Number :</h3>
          <p>{VehicleData.vehicle_no}</p>
        </div>
        <div>
          <h3>Location :</h3>
          <p>{VehicleData.location}</p>
        </div>
        <h3>Cost</h3>
        <div>
          <h3>Per day :</h3>
          <p>{VehicleData.cost.per_day}</p>
        </div>
        <div>
          <h3>After 5-days :</h3>
          <p>{VehicleData.cost.after_5}</p>
        </div>
        <div>
          <h3>After 10-days :</h3>
          <p>{VehicleData.cost.after_10}</p>
        </div>
      </div>
      <Button>
        <Link to={`${match.url}/updateVehicle`}>Update Vehicle</Link>
      </Button>
      <Button>
        <Link to="/allVehicles">Go back</Link>
      </Button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.rent.data,
});

export default connect(mapStateToProps)(VehicleSummary);
