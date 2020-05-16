import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  BOOKING_DATA,
  SORT_USER_DATA,
  FILTER_EQUAL_USER_DATA,
  UPDATE_BILLS,
} from "./actionTypes";

export const register_user = (datas) => {
  return {
    type: REGISTER_USER,
    datas,
  };
};

export const login_user = (email, pwd) => {
  return {
    type: LOGIN_USER,
    email,
    pwd,
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT_USER,
    payload,
  };
};

export const booking_data = (start, end, destination, vehicle) => {
  return {
    type: BOOKING_DATA,
    start,
    end,
    destination,
    vehicle,
  };
};

export const sortUsers = (fieldName, sortType, isNumber) => {
  const sortDataType = "user_data";
  return {
    type: SORT_USER_DATA,
    payload: {
      fieldName,
      sortType,
      isNumber,
      sortDataType,
    },
  };
};

export const updateBills = () => {
  return {
    type: UPDATE_BILLS,
  };
};

export const sortBills = (fieldName, sortType, isNumber) => {
  const sortDataType = "AllBills";
  return {
    type: SORT_USER_DATA,
    payload: {
      fieldName,
      sortType,
      isNumber,
      sortDataType,
    },
  };
};

export const filterBillsEq = (category, value) => {
  const filterDataType = "AllBills",
    dataDestination = "AllBills";
  return {
    type: FILTER_EQUAL_USER_DATA,
    payload: {
      category,
      value,
      filterDataType,
      dataDestination,
    },
  };
};
