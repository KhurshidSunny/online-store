import { createSlice } from "@reduxjs/toolkit";

const fitlerIntialState = {
  sort: "",
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  search: "",
};

const filterReducer = createSlice({
  name: "filter",
  initialState: fitlerIntialState,
  reducers: {
    lowToHigh(state, action) {
      state.sort = action.payload;
    },

    highToLow(state, action) {
      state.sort = action.payload;
    },

    filterByStock(state, action) {
      state.byStock = action.payload;
    },

    filterByDelivery(state, action) {
      state.byFastDelivery = !action.payload;
    },

    filterByRating(state, action) {
      state.byRating = action.payload + 1;
    },

    searchByName(state, action) {
      state.search = action.payload;
    },

    clearFilter(state) {
      state.clearFilter = true;
      state.sort = "";
      state.byStock = false;
      state.byFastDelivery = false;
      state.byRating = 0;
    },
  },
});

export const {
  lowToHigh,
  highToLow,
  filterByStock,
  filterByDelivery,
  filterByRating,
  searchByName,
  clearFilter,
} = filterReducer.actions;

export default filterReducer.reducer;

// export default function filterReducer(state = fitlerIntialState, action) {
//   switch (action.type) {
//     case "filter/lowToHigh":
//       return {
//         ...state,
//         sort: action.payload,
//       };
//     case "filter/highToLow":
//       return {
//         ...state,
//         sort: action.payload,
//       };
//     case "filter/filterByStock":
//       return {
//         ...state,
//         byStock: action.payload,
//       };
//     case "filter/filterByDelivery":
//       return { ...state, byFastDelivery: !action.payload };
//     case "filter/filterByRating":
//       return {
//         ...state,
//         byRating: action.payload,
//       };
//     case "filter/clearFilter":
//       return {
//         ...state,
//         clearFilter: true,
//         sort: "",
//         byStock: false,
//         byRating: 0,
//         byFastDelivery: false,
//       };
//     case "filter/searchByName":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// // Action creators for fitler

// export function lowToHigh() {
//   return { type: "filter/lowToHigh", payload: "lowToHigh" };
// }

// export function highToLow() {
//   return { type: "filter/highToLow", payload: "highToLow" };
// }

// export function filterByStock(byStock) {
//   return { type: "filter/filterByStock", payload: !byStock };
// }

// export function filterByDelivery(byFastDelivery) {
//   return { type: "filter/filterByDelivery", payload: byFastDelivery };
// }

// export function filterByRating(index) {
//   return { type: "filter/filterByRating", payload: index + 1 };
// }

// export function clearFilter() {
//   return { type: "filter/clearFilter" };
// }

// export function searchByName(searchValue) {
//   return { type: "filter/searchByName", payload: searchValue };
// }
