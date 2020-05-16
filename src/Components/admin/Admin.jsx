import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <Button>
        <Link to={`${props.match.url}/allVehicles`}>View All Vehicles</Link>
      </Button>
      <Button>
        <Link to={`${props.match.url}/addVehicle`}>Add New Vehicle</Link>
      </Button>
      <Button>
        <Link to={`${props.match.url}/allUsers`}>View All Users</Link>
      </Button>
      <Button>
        <Link to={`${props.match.url}/allBookings`}>View All Bookings</Link>
      </Button>
    </div>
  );
};
