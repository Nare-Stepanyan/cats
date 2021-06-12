import { GET_CATEGORIES } from "../actions/actionTypes";
const initState = {
  categories: [],
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
