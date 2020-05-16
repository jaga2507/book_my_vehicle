import React from "react";
import { connect } from "react-redux";
import UserTable from "./UserTable";
import { sortUsers } from "../../Redux/userAction";

class ViewAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: true,
    };
  }

  handleSort = (...e) => {
    const [fieldName, isNumber] = e;
    let { isSorted } = this.state;
    let { sortUsers } = this.props;
    if (isSorted) {
      sortUsers(fieldName, "DECENDING", isNumber);
    } else {
      sortUsers(fieldName, "ASCENDING", isNumber);
    }
    this.setState({
      isSorted: !this.state.isSorted,
    });
  };

  render() {
    return (
      <React.Fragment>
        <UserTable handleSort={this.handleSort} {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Users: state.user.user_data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sortUsers: (category, sortType, isNumber) =>
      dispatch(sortUsers(category, sortType, isNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllUsers);
