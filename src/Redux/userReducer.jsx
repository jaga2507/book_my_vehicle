import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  BOOKING_DATA,
  UPDATE_BILLS,
  FILTER_EQUAL_USER_DATA,
  SORT_USER_DATA,
  PAYMENT_DATA
} from "./actionTypes";
import user_date from "../Datas/user1.json";
import user_data1 from "../Datas/user.json";

const initState = {
  isauth: true,
  is_error: false,
  user_data: [...user_date.users],
  user_datas: [...user_data1.users],
  booking: [],
  booking_history: [],
  AllBills: "",
};


const userReducer = (state = initState, action) => {

  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isauth: true,
        user_data: [action.datas],
        user_datas: [...state.user_datas, action.datas]
      };

    case LOGIN_USER:
      if (
        state.user_data[0].email === action.email &&
        state.user_data[0].password === action.pwd
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

    case PAYMENT_DATA:
      let req = state.user_datas.filter((item) => item.userId === state.user_data[0].userId)
      let bill_datas = state.user_datas
      for (let i = 0; i < bill_datas.length; i++) {
        if (req[0].userId === bill_datas[i].userId) {
          bill_datas[i].history.push(action.pay_details)
        }
      }

      let up = state.user_data[0]
      up.history.push(action.pay_details)
      return {
        ...state,
        user_data: [up],
        user_datas: bill_datas,
        booking_history: [...state.booking_history, action.pay_details]
      }

    case UPDATE_BILLS:
      let updatedBills = [];
      Object.keys(state.user_datas).map((key) => {
        let CurrentBill = state.user_datas[key];
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
