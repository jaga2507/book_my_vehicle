import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const VehicleSummary = (props) => {
  let { data, match } = props;
  let VehicleData = data.find((vehicle) => {
    return vehicle.id == match.params.id;
  });

  return (
    <React.Fragment>
      <div>
        <h1>Vehicle Details</h1>
        <div>
          <img src={VehicleData.img_url} alt="VehicleImg" />
        </div>
        <div>
          <p style={{ fontSize: "20px" }} ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>Vehicle ID :</spam> {VehicleData.id}</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>Availability :</spam> {VehicleData.available ? "Available" : "Not Available"}</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }} >
            <spam style={{ fontWeight: "bold", fontSize: "20px" }}>Model Name :
            </spam> {VehicleData.modal_name}
          </p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  >
            <spam style={{ fontWeight: "bold", fontSize: "20px" }}>Company :
            </spam> {VehicleData.company}
          </p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>Category :</spam> {VehicleData.category}</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>Vehicle Number :</spam> {VehicleData.vehicle_no}</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>Location :</spam> {VehicleData.location}</p>
        </div>
        <h3>Cost</h3>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>Per day :</spam> {VehicleData.cost.per_day}</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>After 5 days :</spam> {VehicleData.cost.after_5}</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}  ><spam style={{ fontWeight: "bold", fontSize: "20px" }}>After 10 days :</spam> {VehicleData.cost.after_10}</p>
        </div>
      </div>

      <Link to={`${match.url}/updateVehicle`}>
        <button className="btn btn-primary bt-lg">
          Update Vehicle
        </button>
      </Link>
      <br />
      <br />
      <Link to="/admin/allVehicles">
        <button className="btn btn-danger bt-lg">Go back
        </button>
      </Link>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.rent.data,
});

export default connect(mapStateToProps)(VehicleSummary);
