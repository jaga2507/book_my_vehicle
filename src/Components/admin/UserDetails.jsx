import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  let { users, match } = props;
  let UserData = users.find((user) => {
    return user.userId === match.params.id;
  });
  return (
    <React.Fragment>
      <div>
        <div>
          <h3>User ID :</h3>
          <p>{UserData.userId}</p>
        </div>
        <div>
          <h3>Name :</h3>
          <p>{UserData.name}</p>
        </div>
        <div>
          <h3>age :</h3>
          <p>{UserData.age}</p>
        </div>
        <div>
          <h3>Email :</h3>
          <p>{UserData.email}</p>
        </div>
        <div>
          <h3>Phone Number :</h3>
          <p>{UserData.mobile}</p>
        </div>
        <div>
          <h3>Password :</h3>
          <p>{UserData.password}</p>
        </div>
        <div>
          <h3>Lisence ID :</h3>
          <p>{UserData.lisenceId}</p>
        </div>
        <div>
          <h3>History</h3>
          {UserData.history.map((item, index) => {
            return (
              <div key={index}>
                <h3>{index + 1}</h3>
                <div>
                  <h3>Bill ID :</h3>
                  <p>{item.billId}</p>
                </div>
                <div>
                  <h3>Bill Amount :</h3>
                  <p>{item.billAmount}</p>
                </div>
                <div>
                  <h3>Booked date :</h3>
                  <p>{item.bookedDate}</p>
                </div>
                <div>
                  <h3>Start date :</h3>
                  <p>{item.startDate}</p>
                </div>
                <div>
                  <h3>End date :</h3>
                  <p>{item.endDate}</p>
                </div>
                <div>
                  <h3>Origin :</h3>
                  <p>{item.origin}</p>
                </div>
                <div>
                  <h3>Destination :</h3>
                  <p>{item.destination}</p>
                </div>
                <div>
                  <h3>Vehicle Number :</h3>
                  <p>{item.vehicle_no}</p>
                </div>
                <div>
                  <h3>Payment Method :</h3>
                  <p>{item.paymentMethod}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/admin/allUsers">
        <button className="btn btn-primary">
          Go back
        </button>
      </Link>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.user_datas,
});

export default connect(mapStateToProps)(UserDetails);
