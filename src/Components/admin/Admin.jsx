import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div >
      <Link to={`${props.match.url}/allVehicles`}>
        <button className="btn btn-primary btn-lg mr-4 p-4">View All Vehicles
        </button></Link>
      <Link to={`${props.match.url}/addVehicle`}>
        <button className="btn btn-secondary btn-lg mr-2 p-4">Add New Vehicle</button></Link>
      <br />
      <br />
      <Link to={`${props.match.url}/allUsers`}>
        <button className="btn btn-success btn-lg mr-5 ml-3 p-4">View All Users</button></Link>
      <Link to={`${props.match.url}/allBookings`}>
        <button className="btn btn-warning btn-lg mr-2 p-4">View All Bookings</button></Link>
    </div>
  );
};
