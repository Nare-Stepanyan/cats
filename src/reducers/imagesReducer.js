import { GET_IMAGES } from "./../actions/actionTypes";
const initState = {
  images: [],
  params: {
    limit: 10,
    page: 1,
    category_ids: null,
  },
};

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: [...action.payload],
      };
    default:
      return state;
  }
};

export default imageReducer;
