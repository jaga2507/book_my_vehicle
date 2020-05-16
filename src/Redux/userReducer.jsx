import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  BOOKING_DATA,
  UPDATE_BILLS,
  FILTER_EQUAL_USER_DATA,
  SORT_USER_DATA,
} from "./actionTypes";
import user_date from "../Datas/user.json";

const initState = {
  isauth: true,
  is_error: false,
  user_data: [...user_date.users],
  booking: [],
  AllBills: "",
};

console.log(initState.user_data);

const userReducer = (state = initState, action) => {
  console.log(state.user_data);
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isauth: true,
        user_data: [...state.user_data, action.datas],
      };

    case LOGIN_USER:
      let get_user = state.user_data.filter(
        (item) => item.email === action.email
      );
      if (
        get_user[0].email === action.email &&
        get_user[0].pwd === action.pwd
      ) {
        return {
          ...state,
          isauth: true,
          is_error: false,
        };
      }

      return {
        ...state,
        isauth: false,
        is_error: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isauth: false,
      };

    case BOOKING_DATA:
      let temp = {
        startDate: action.start,
        endDate: action.end,
        des: action.destination,
        vehicle: action.vehicle,
      };
      return {
        ...state,
        booking: temp,
      };

    case UPDATE_BILLS:
      let updatedBills = [];
      Object.keys(state.user_data).map((key) => {
        let CurrentBill = state.user_data[key];
        updatedBills = [...updatedBills, ...CurrentBill.history];
      });
      return {
        ...state,
        AllBills: [...updatedBills],
      };

    case FILTER_EQUAL_USER_DATA:
      let { category, value, filterDataType, dataDestination } = action.payload;
      if (value === "all") {
        return {
          ...state,
          [dataDestination]: state[filterDataType],
        };
      }
      let temp2 = state[filterDataType].filter(
        (vehicle) => vehicle[category] === value
      );
      return {
        ...state,
        [dataDestination]: [...temp2],
      };

    case SORT_USER_DATA:
      let { fieldName, sortType, isNumber, sortDataType } = action.payload;
      fieldName = fieldName.split(".");
      let data = state[sortDataType];
      console.log("sortDataType , data", sortDataType, data);
      if (sortType === "ASCENDING") {
        let sorted = data.sort((a, b) => {
          let aNum = a,
            bNum = b;
          fieldName.forEach((key) => {
            aNum = aNum[key];
            bNum = bNum[key];
          });
          if (isNumber === true) {
            return Number(aNum) - Number(bNum);
          } else if (isNumber === "bool") {
            return aNum === bNum ? 0 : aNum ? 1 : -1;
          }
          aNum = aNum.toLowerCase();
          bNum = bNum.toLowerCase();
          if (aNum < bNum) {
            return -1;
          }
          if (aNum > bNum) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          [sortDataType]: [...sorted],
        };
      } else if (sortType === "DECENDING") {
        let sorted = data.sort((a, b) => {
          let aNum = a,
            bNum = b;
          fieldName.forEach((key) => {
            aNum = aNum[key];
            bNum = bNum[key];
          });
          if (isNumber) {
            return Number(bNum) - Number(aNum);
          } else if (isNumber === "bool") {
            return aNum === bNum ? 0 : aNum ? 1 : -1;
          }
          aNum = aNum.toLowerCase();
          bNum = bNum.toLowerCase();
          if (aNum > bNum) {
            return -1;
          }
          if (aNum < bNum) {
            return 1;
          }
          return 0;
        });

        return {
          ...state,
          [sortDataType]: [...sorted],
        };
      }

    default:
      return state;
  }
};

export default userReducer;
