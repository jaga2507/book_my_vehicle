import datas from "../Datas/datas.json";
import {
  SEARCH_VEHICLE,
  FILTER_VEHICLE,
  SHOW_BOOKINGS,
  ADD_VEHICLE,
  UPDATE_VEHICLE,
  FILTER_EQUAL_DATA,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  data: [...datas.vehicle],
  copyOfData: [...datas.vehicle],
  filteredData: [...datas.vehicle],
};


const rentReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_VEHICLE:
      let name = action.payload.toLowerCase();
      let filterArr = state.data.filter((ele) =>
        ele.company.toLowerCase().includes(name)
      );
      if (name === "") {
        filterArr = state.copyOfData;
      }
      return {
        ...state,
        data: [...filterArr],
      };

    case ADD_VEHICLE:
      action.payload.id = state.data.length;
      return {
        ...state,
        data: [...state.data, action.payload],
        filteredData: [...state.filteredData, action.payload],
      };

    case FILTER_EQUAL_DATA:
      let { category, value, filterDataType, dataDestination } = action.payload;
      if (value === "all") {
        return {
          ...state,
          [dataDestination]: state[filterDataType],
        };
      }
      let temp = state[filterDataType].filter(
        (vehicle) => vehicle[category] === value
      );
      return {
        ...state,
        [dataDestination]: [...temp],
      };

    case UPDATE_VEHICLE:
      action.payload.id = action.id;
      state.data[action.id] = action.payload;
      return {
        ...state,
        data: state.data,
        filteredData: state.data,
      };

    case FILTER_VEHICLE: {
      let target = action.payload;
      let bookings = [];
      if (target === "Show All") {
        bookings = state.copyOfData;
      } else if (target === "Show Available") {
        bookings = state.copyOfData.filter((ele) => ele.available === true);
      }
      else if (target === "Show Only Car") {
        bookings = state.copyOfData.filter((ele) => ele.category === "car");
      }
      else if (target === "Show Only Bike") {
        bookings = state.copyOfData.filter((ele) => ele.category === "bike");
      }
      else if (target === "Price Lower to Higher") {
        bookings = state.copyOfData.sort((a, b) => {
          return a.cost.per_day - b.cost.per_day;
        });
      } else {
        bookings = state.copyOfData.sort((a, b) => {
          return b.cost.per_day - a.cost.per_day;
        });
      }
      return {
        ...state,
        data: [...bookings],
      };
    }

    case SHOW_BOOKINGS: {
      let arr = state.data;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.id)
          arr[i].available = false;
      }
      return {
        ...state,
        data: arr
      }
    }

    case SORT_DATA:
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

export default rentReducer;
